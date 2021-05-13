import React from "react";


function Header(props) {
  return (
    <div className="container pt-3">
        <div className="jumbotron mt-10 p-6">
           <h1>Employee Directory</h1>
           <p></p>
           <span className="d-flex">
              <form className="d-flex align-items-end">
                <input className="form-control  m-2" type="text" value={props.search} id="search" onChange={(event)=>props.handleInputChange(event)} placeholder="Search by Last Name"></input>
                <button className="btn btn-primary m-2" value={props.search} type="submit"onClick={(event)=> props.handleFormSubmit(event)}>Search</button>
              </form>
         </span>
        </div>
       
    </div>
  );
}

export default Header;
