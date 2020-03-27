import { gql } from 'apollo-server';

export default gql`
  type Todo {
    title: String
    created: String
    completed: Boolean
  }

  type Query {
    todos(
      """
      The number of results to show. Must be >= 1. Default = 20
      """
      limit: Int
      """
      If you add a cursor here, it will only return results _after_ this cursor
      """
      offset: Int
    ): TodoConnection!
    hasMore: Boolean
  }

  type TodoConnection {
    cursor: Int!
    hasMore: Boolean!
    items: [Todo!]!
  }
`;