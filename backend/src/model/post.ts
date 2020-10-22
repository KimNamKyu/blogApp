import monogoose, { Schema } from 'mongoose';

const postSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        type: Date,
        default: Date.now,  //현재 날짜를 기본 값으로 지정
    },
    // user: {
    //     _id: monogoose.Types.ObjectId,
    //     username: String,
    // },
});

const Post = monogoose.model('Post', postSchema);
export default Post;