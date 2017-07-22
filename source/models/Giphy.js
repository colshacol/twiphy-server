
import mongoose  from 'mongoose';
mongoose.Promise = global.Promise;
import createShortId from '../utils/createShortId';

const giphySchema = mongoose.Schema({
  shortId: String,
  longId: {
    type: String,
    trim: true,
    required: 'Please supply a long ID!'
  }
});

giphySchema.pre('save', async function(next) {
  if (!this.isModified('longId')) {
    return next()
  }

  const makeShortId = async () => {
    const shortId = createShortId()
    const gifsWithShortId = await this.constructor.find({ shortId })
    return gifsWithShortId.length ? makeShortId() : shortId
  }

  this.shortId = await makeShortId()
  next()
});

export default mongoose.model('Giphy', giphySchema);