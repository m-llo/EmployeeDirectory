import React from "react";


function Header(props) {
  return (
    <div className="container pt-3">
        <div className="jumbotron mt-6 p-5 bg-dark">
           <h1 className="display-2 text-primary">Employee Directory</h1>
           <p></p>
           <span className="d-flex mt-5">
              <form className="d-flex align-items-end">
                <input className="form-control  ml-2" type="text" value={props.search} id="search" onChange={(event)=>props.handleInputChange(event)} placeholder="Search by Last Name"></input>
                <button className="btn btn-primary" value={props.search} type="submit"onClick={(event)=> props.handleFormSubmit(event)}>Search</button>
              </form>
         </span>
        </div>
       
    </div>
  );
}

export default Header;
