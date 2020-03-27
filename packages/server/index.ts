import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';
import { TodoDataSource } from './datasources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    todos: new TodoDataSource()
  }),
  introspection: true,
  playground: true
});
server.listen().then(({ url }) => console.log(`Listening at ${url}`));
