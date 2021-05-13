import React from "react";

function ResultList(props) {
  return (
    <div className="px-5">
    <table className="table table-striped dataTable p-5">
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
        <th scope="col">
          Phone
        </th>
        <th scope="col">
          City
        </th>
      </tr>
      </thead>
      <tbody>
      {props.results.map(result => (
       <tr key={result.login.uuid}>
         <td><img src={result.picture.thumbnail} alt="employee thumbnail"/></td>
         <td>{result.name.first}</td>
         <td>{result.name.last}</td>
         <td>{result.email}</td>
         <td>{result.phone}</td>
         <td>{result.location.city}</td>
       </tr>
      ))}
       
      </tbody>
    </table>
    </div>
  );
}

export default ResultList;
