import React from "react";

function ResultList(props) {
  return (
    <table className="table table-striped dataTable">
      <thead>
        <tr>
        <th scope="col">
          Picture
        </th>
        <th scope="col" onClick={()=> props.employeeSort()}>
          First
        </th>
        <th scope="col">
          Last
        </th>
        <th scope="col">
          Email
        </th>
      </tr>
      </thead>
      <tbody>
      {props.results.map(result => (
       <tr key={result.login.uuid}>
         <td><img src={result.picture.thumbnail}/></td>
         <td>{result.name.first}</td>
         <td>{result.name.last}</td>
         <td>{result.email}</td>
       </tr>
      ))}
       
      </tbody>
    </table>
  );
}

export default ResultList;
