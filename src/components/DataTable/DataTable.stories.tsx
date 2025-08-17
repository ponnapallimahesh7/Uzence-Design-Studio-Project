import React from 'react';
import { DataTable } from './DataTable';
import { Meta, StoryFn } from '@storybook/react-webpack5';
import { DataTableProps, Column} from './DataTable.types';

interface User {
  id: number;
  name: string;
  email: string;
}

export default {
  title: 'Components/DataTable',
  component: DataTable,
} as Meta;

const Template: StoryFn<DataTableProps<User>> = (args) => <DataTable {...args} />;

const sampleData: User[] = [
  { id: 1, name: 'Mahesh', email: 'mahesh@test.com' },
  { id: 2, name: 'Alice', email: 'alice@test.com' },
  { id: 3, name: 'Bob', email: 'bob@test.com' },
];

const columns: Column<User>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];
export const Default = Template.bind({});
Default.args = { data: sampleData, columns };

export const Selectable = Template.bind({});
Selectable.args = { data: sampleData, columns, selectable: true };
