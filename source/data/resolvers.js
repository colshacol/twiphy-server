import mongoose from 'mongoose';
const Giphy = mongoose.model('Giphy');

const resolvers = {
  Query: {
    entry(root, args){
      return Giphy.findOrCreate(args);
    },
  },
  Entry() {
    return Giphy.findOrCreate(args);
  }
};

export default resolvers;