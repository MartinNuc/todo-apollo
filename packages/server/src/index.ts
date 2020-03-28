import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';

const schema = importSchema('./src/schema.graphql');

import resolvers from './resolvers';
import { TodoDataSource } from './datasources';

const todosDatasource = new TodoDataSource();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => {
    return {
      todos: todosDatasource
    };
  },
  introspection: true,
  playground: true
});
server.listen().then(({ url }) => console.log(`Listening at ${url}`));
