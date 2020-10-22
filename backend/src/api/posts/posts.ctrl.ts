import Post from '../../model/post';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx: any, next: any) => {
    const { id } = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 400;
        return;
    }
    return next();
}
/**
 POST /api/posts
 {
     title: '제목',
     body: '내용',
     tags: ['태그1', '태그3']
 }
 */
export const write = async (ctx: any) => {

    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
        console.log('error')

    }
};
export const list = async (ctx: any) => {
    const page = parseInt(ctx.query.page || '1', 10);
    // query는 문자열이기에 숫자로 변환
    //값이 주어지지 않았다면 1을 기본으로 설정
    if (page < 1) {
        ctx.status = 400;
        return;
    }
    try {
        const posts = await Post.find()
            .sort({ _i: -1 })
            .limit(10)
            .skip((page - 1) * 10)
            .exec()
        const postCount = await Post.countDocuments().exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10));
        ctx.body = posts
            .map(post => post.toJSON())
            .map(post => ({
                ...post,
                body: post.body.length < 200 ? post.body : `${post.body.slice(0,200)}...`,      //길이 제한 200보다 클때 ...
            }));
    } catch (e) {
        ctx.throw(500, e);
    }
};
export const read = async (ctx: any) => {
    const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};
export const remove = async (ctx: any) => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();    //findByIdAndRemove() => id를 찾아서 지움  //findOneAndRemove() 특정조건을 만족하는 데이터 하나를 찾아서 제거
        ctx.status = 204;  //성공하기는 했지만 응답할 데이터는 없음
    } catch (e) {
        ctx.throw(500, e);
    }

};
export const update = async (ctx: any) => {
    const { id } = ctx.params;
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true // 이값을 설정하면 업데이트된 데이터를 반환한다.
            //false일때는 업데이트 되기 전의 데이터를 반환
        }).exec()
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};
export const replace = (ctx: any) => { };