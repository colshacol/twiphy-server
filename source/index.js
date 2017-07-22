import Koa from 'koa';
require('regenerator-runtime');
import koaRouter from 'koa-router';
import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(err.message);
});

import './models/Giphy';

import { getGiphyByLongId, createGiphy } from './controllers/giphyController';

const router = koaRouter();
const server = new Koa();

router.get('/entry/:id', 
  getGiphyByLongId, 
  createGiphy
);

server
  .use(router.routes())
  .use(router.allowedMethods());

server.on('error', err =>
  console.log('server error', err)
);

server.listen(3000, () => {
  console.log('[server]', 'LISTEN 3000')
});
