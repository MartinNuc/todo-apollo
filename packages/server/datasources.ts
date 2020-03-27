import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { Todo } from './models';

export class TodoDataSource extends DataSource {
  context: any;
  data: Todo[] = [
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

  async getAll(offset: number, limit: number) {
    const afterOffset = this.data
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
