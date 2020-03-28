import React, { useState, FormEvent } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  AddTodo_addTodo_todo,
  AddTodoVariables} from './__generated__/addTodo';
import { NewTodo } from '../__generated__/globalTypes';

export default function NewTask() {
  const [title, setTitle] = useState('');
  const [addTodo, { error }] = useMutation<
    AddTodo_addTodo_todo,
    AddTodoVariables
  >(
    gql`
      mutation AddTodo($todo: NewTodo!) {
        addTodo(todo: $todo) {
          success
          todo {
            id
            title
            completed
            created
          }
        }
      }
    `,
    {
      onCompleted: () => setTitle('')
    }
  );

  function createNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const todo: NewTodo = {
      title,
      completed: false
    };
    addTodo({ variables: { todo } });
  }

  return (
    <form onSubmit={createNewTask}>
      <input onChange={event => setTitle(event.target.value)} value={title} />
      <button type="submit">Save</button>
      {error && <div className="error">There was an error</div>}
    </form>
  );
}
