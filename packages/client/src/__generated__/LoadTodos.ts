/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LoadTodos
// ====================================================

export interface LoadTodos_todos_items {
  __typename: "Todo";
  title: string;
  completed: boolean;
}

export interface LoadTodos_todos {
  __typename: "TodoConnection";
  hasMore: boolean;
  cursor: number;
  items: LoadTodos_todos_items[];
}

export interface LoadTodos {
  todos: LoadTodos_todos;
}

export interface LoadTodosVariables {
  offset?: number | null;
}
