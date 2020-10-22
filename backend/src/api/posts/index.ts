import Router from 'koa-router';
import * as postctrl from './posts.ctrl';
const posts = new Router();

posts.post('/', postctrl.write);
posts.get('/', postctrl.list);
posts.get('/:id', postctrl.checkObjectId, postctrl.read);
posts.delete('/:id', postctrl.checkObjectId, postctrl.remove);
posts.put('/:id', postctrl.replace);
posts.patch('/:id', postctrl.checkObjectId, postctrl.replace);

export default posts;
