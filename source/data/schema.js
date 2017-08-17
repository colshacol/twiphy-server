import {
  makeExecutableSchema
} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Entry {
  id: String
  longId: String
  shortId: String
}
type Query {
 entry(longId: String): Entry
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
