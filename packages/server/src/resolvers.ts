import { CreateTodoMutationResponse, MutationAddTodoArgs } from './generated/graphql';
import { TodoDataSource } from './datasources';
import { GraphQLScalarType, Kind } from 'graphql';

import { PubSub } from 'apollo-server';
const pubsub = new PubSub();

export default {
  Query: {
    todos: (
      _: any,
      { offset = 0, limit = 5 }: { offset: number; limit: number },
      { dataSources }: { dataSources: { todos: TodoDataSource } }
    ) => dataSources.todos.getAll(offset, limit)
  },
  Mutation: {
    addTodo: async (
      _: any,
      {todo}: MutationAddTodoArgs,
      { dataSources }: { dataSources: { todos: TodoDataSource } }
    ): Promise<CreateTodoMutationResponse> => {
      const newTodo = await dataSources.todos.addTodo(todo);
      pubsub.publish('TODO_ADDED', { todoAdded: newTodo });
      return {
        success: true,
        code: 'CREATED',
        message: 'Created',
        todo: newTodo
      }
    }
  },
  Subscription: {
    todoAdded: {
      subscribe: () => pubsub.asyncIterator(['TODO_ADDED'])
    }
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  })
};
