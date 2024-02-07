'use client'
import React from 'react'
import { useTable, useGlobalFilter } from 'react-table'
import ViewClient from './ViewClient';
import EditClient from './EditClient';
import DeleteButton from './DeleteButton';

const TableComponent = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
      } = useTable({ columns, data }, useGlobalFilter);
    
      const { globalFilter } = state;
    
      return (
        <div className="mx-auto max-w-full p-4">
      <div className="mb-4">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
          Αναζήτηση:
        </label>
        <input
          id="search"
          type="text"
          autoComplete="off"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <table {...getTableProps()} className="w-full border-collapse">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="p-2 border-b text-left font-medium text-gray-800"
                >
                  {column.render('Header')}
                </th>
              ))}
              <th className="p-2 border-b text-center col-span-3 font-medium text-gray-800">Ενέργειες</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-2 border-b">
                    {cell.render('Cell')}
                  </td>
                ))}
                <td className="p-2 border-b">
                <ViewClient id={row.original.$id} className="text-blue-500 hover:underline cursor-pointer mr-2 md:mr-20" />
                </td>
                <td className="p-2 border-b">
                <EditClient id={row.original.$id} className="text-green-500 hover:underline cursor-pointer ml-2 md:ml-20" />
                </td>
                <td className="p-2 border-b">
                <DeleteButton id={row.original.$id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
      );
    };
 

export default TableComponent