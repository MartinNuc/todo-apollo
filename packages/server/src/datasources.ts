import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { NewTodo, Todo } from './generated/graphql';

export class TodoDataSource extends DataSource {
  context: any;
  data: Omit<Todo, 'id'>[] = [
    {
      title: 'Shopping',
      completed: false,
      created: new Date()
    },
    {
      title: 'Laundery',
      completed: true,
      created: new Date('2019-02')
    },
    {
      title: 'Homeworks',
      completed: false,
      created: new Date('2019-02')
    }
  ];

  initialize(config: DataSourceConfig<any>) {
    this.context = config.context;
  }

  async addTodo(todo: NewTodo): Promise<Todo> {
    const newLength = this.data.push({
      ...todo,
      completed: !!todo.completed,
      created: new Date()
    });
    return {
      ...this.data[newLength - 1],
      id: `${newLength - 1}`
    };
  }
  
  async getAll(offset: number, limit: number) {
    const afterOffset = this.data
      .map((todo, index) => ({
        ...todo,
        id: `${index}`
      }))
      .filter((_, index) => index >= offset)
    const afterOffsetCount = afterOffset.length;
    const items = afterOffset.filter((_, index) => index < limit);
    return {
      items,
      hasMore: afterOffsetCount !== items.length,
      cursor: offset + items.length
    };
  }
}
