import mongoose from 'mongoose';
const Entry = mongoose.model('Entry');

const resolvers = {
  Query: {
    entry(root, args){
      return Entry.findOrCreate(args);
    },
  },
  Entry() {
    return Entry.findOrCreate(args);
  }
};

export default resolvers;