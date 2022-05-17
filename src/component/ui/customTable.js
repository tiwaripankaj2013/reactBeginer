import React from "react";

export const CustomTable = (props) => {
  const { tableData = null,columns=null} = props;

  return (
    <>
    <table className="table table-striped border-2 border-gray-400">
      <thead>
        <tr>
          {columns && columns.map((heading,index) => (<th className="whitespace-nowrap" key={index}>{heading.field,heading.title}</th>)
          )}
        </tr>
      </thead>
      <tbody>
        {tableData && tableData.map((row,index) =>(
          <tr key={index}>
            {columns.map((col,index)=> (
              <td key={index}>{row[col.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    {tableData ? null : 'No data found'}
    </>
  );
};
