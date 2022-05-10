import React from "react";

export const CustomTable = (props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {props.tableHeading.map((title) => (<th className="whitespace-nowrap">{title}</th>)
          )}
        </tr>
      </thead>
      <tbody>
        {props.tableData.map((item) =>(
          <tr>
            <td>{item.id}</td>
            <td>{item.fName}</td>
            <td>{item.lName}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
