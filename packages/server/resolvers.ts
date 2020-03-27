import { TodoDataSource } from "./datasources";

export default {
  Query: {
    todos: (_: any, {offset = 0, limit = 5}: {offset: number, limit: number}, { dataSources }: { dataSources: {todos: TodoDataSource }}) => dataSources.todos.getAll(offset, limit)
  }
};
