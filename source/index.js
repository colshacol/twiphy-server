import Koa from 'koa';
require('regenerator-runtime');
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import mongoose from 'mongoose';
import { graphqlKoa } from 'graphql-server-koa';

const mongo = mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(err.message);
});

import './models/Giphy';

import schema from './data/schema';

import { getGiphyByLongId, createGiphy } from './controllers/giphyController';

const router = koaRouter();
const server = new Koa();

server.use(koaBody());

router.get('/entry/:id', 
  getGiphyByLongId, 
  createGiphy
);

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));

server
  .use(router.routes())
  .use(router.allowedMethods());

server.on('error', err =>
  console.log('server error', err)
);

server.listen(3000, () => {
  console.log('[server]', 'LISTEN 3000')
});
