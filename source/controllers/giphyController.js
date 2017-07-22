import mongoose from 'mongoose';
const Giphy = mongoose.model('Giphy');

export async function getGiphyByLongId (ctx, next) {
  const giphy = await Giphy.findOne({ longId: ctx.params.id })
  if(!giphy) return next()
  ctx.body = giphy.shortId
};

export async function createGiphy (ctx) {
  const giphy = await (new Giphy({ longId: ctx.params.id })).save()
  ctx.body = giphy.shortId
}