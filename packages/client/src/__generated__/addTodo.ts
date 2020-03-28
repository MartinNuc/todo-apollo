/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewTodo } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddTodo
// ====================================================

export interface AddTodo_addTodo_todo {
  __typename: "Todo";
  id: string;
  title: string;
  completed: boolean;
  created: any;
}

export interface AddTodo_addTodo {
  __typename: "CreateTodoMutationResponse";
  success: boolean;
  todo: AddTodo_addTodo_todo | null;
}

export interface AddTodo {
  addTodo: AddTodo_addTodo | null;
}

export interface AddTodoVariables {
  todo: NewTodo;
}
