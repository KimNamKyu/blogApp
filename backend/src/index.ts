require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';        //json형식 넣어주기
import api from './api';
import mongoose from 'mongoose';

let { PORT, MONGO_URI } = process.env;

mongoose.connect(<any>MONGO_URI, { 
    useNewUrlParser: true, 
    useFindAndModify: false,  
    useUnifiedTopology: true,
    useCreateIndex: true, })
    .then(() => {
        console.log('connected mongodb start!!!');
    })
    .catch(e => {
        console.log(e)
    })

const app = new Koa();
const router = new Router();

router.use('/api', api.routes()); //api 라우터 적용

//라우터 적용전에 bodyParser 적용
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 5000;
app.listen(port, () => {
    console.log('Listening to port 4000')
})