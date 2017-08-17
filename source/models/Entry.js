
import mongoose  from 'mongoose';
mongoose.Promise = global.Promise;
import findOrCreate from '../utils/findOrCreate';
import createShortId from '../utils/createShortId';

const entrySchema = mongoose.Schema({
  shortId: String,
  longId: {
    type: String,
    trim: true,
    required: 'Please supply a long ID!'
  }
});

entrySchema.pre('save', async function(next) {
  if (!this.isModified('longId')) {
    return next()
  }

  const makeShortId = async () => {
    const shortId = createShortId()
    const entriesWithShortId = await this.constructor.find({ shortId })
    return entriesWithShortId.length ? makeShortId() : shortId
  }

  this.shortId = await makeShortId()
  next()
});

entrySchema.plugin(findOrCreate);

export default mongoose.model('Entry', entrySchema);