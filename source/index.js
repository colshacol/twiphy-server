import Koa from 'koa';
require('regenerator-runtime');
import koaRouter from 'koa-router';

const router = koaRouter();
const server = new Koa();

router.get('/', async function (context, next) {
  log('[dog]', this.params.x);
  await next();
})

server.listen(3000, () => {
  console.log('[server]', 'LISTEN 3000')
});
