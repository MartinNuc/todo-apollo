import React, { useEffect } from 'react';
import './App.css';
import {
  useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  LoadTodos,
  LoadTodosVariables} from './__generated__/LoadTodos';
import NewTask from './NewTask';

const LOAD_TODOS_QUERY = gql`
  query LoadTodos($offset: Int) {
    todos(offset: $offset, limit: 1) {
      hasMore
      cursor
      items {
        id
        title
        completed
      }
    }
  }
`;

function App() {
  const { data, loading, fetchMore, subscribeToMore } = useQuery<
    LoadTodos,
    LoadTodosVariables
  >(LOAD_TODOS_QUERY);
  useEffect(() => {
    console.log('subscribed')
    subscribeToMore({
      document: gql`
        subscription onTodoAdded {
          todoAdded {
            id
            title
          }
        }
      `,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        return {
          todos: {
            ...prev.todos,
            hasMore: true
          }
        };
      }
    });
  }, []);

  function loadMore(cursor: number) {
    fetchMore({
      variables: {
        offset: cursor
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          todos: {
            ...fetchMoreResult.todos,
            items: [...prev.todos.items, ...fetchMoreResult.todos.items]
          }
        };
      }
    });
  }

  return (
    <div>
      Todos:
      {loading ? (
        'Loading'
      ) : (
        <>
          <ul>
            {data?.todos?.items.map((todo, index) => (
              <li key={index}>{todo.title}</li>
            ))}
          </ul>
          {data?.todos.hasMore && (
            <button onClick={() => loadMore(data.todos.cursor)}>
              Load More
            </button>
          )}
        </>
      )}
      <NewTask />
    </div>
  );
}

export default App;
