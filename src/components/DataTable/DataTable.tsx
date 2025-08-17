import React, { useState } from 'react';
import { DataTableProps, Column } from './DataTable.types';
import classNames from 'classnames';

export function DataTable<T>({ data, columns, loading, selectable, onRowSelect }: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig?.key === col.dataIndex && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: col.dataIndex, direction });
  };

  const handleSelectRow = (row: T) => {
    if (!selectable) return;
    let updated: T[];
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter((r) => r !== row);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  if (loading) return <p>Loading...</p>;
  if (!data.length) return <p>No data available.</p>;

  return (
    <table className="w-full border border-gray-200 text-left">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className={classNames('p-2 border-b', { 'cursor-pointer': col.sortable })}
              onClick={() => handleSort(col)}
            >
              {col.title} {sortConfig?.key === col.dataIndex ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, idx) => (
          <tr
            key={idx}
            className={classNames('hover:bg-gray-100', { 'bg-gray-200': selectable && selectedRows.includes(row) })}
            onClick={() => handleSelectRow(row)}
          >
            {columns.map((col) => (
              <td key={col.key} className="p-2 border-b">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
