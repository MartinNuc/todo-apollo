import React, { useState, FormEvent, useRef } from 'react';
import { Todo } from './models';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  AddTodo_addTodo_todo,
  AddTodoVariables,
  AddTodo_addTodo
} from './__generated__/addTodo';
import { NewTodo } from '../__generated__/globalTypes';

export default function NewTask() {
  const input = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState('');
  const [addTodo, { data, error }] = useMutation<
    AddTodo_addTodo_todo,
    AddTodoVariables
  >(gql`
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
  `, {
    onCompleted: () => {
      if (input && input.current) {
        input.current.value = '';
      }
    }
  });

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
      <input ref={input} onChange={event => setTitle(event.target.value)} value={title} />
      <button type="submit">Save</button>
      {error && <div className="error">There was an error</div>}
    </form>
  );
}
