/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: onTodoAdded
// ====================================================

export interface onTodoAdded_todoAdded {
  __typename: "Todo";
  id: string;
  title: string;
}

export interface onTodoAdded {
  todoAdded: onTodoAdded_todoAdded | null;
}
