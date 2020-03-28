/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: todoAdded
// ====================================================

export interface todoAdded_todoAdded {
  __typename: "Todo";
  id: string;
  title: string;
  completed: boolean;
}

export interface todoAdded {
  todoAdded: todoAdded_todoAdded | null;
}
