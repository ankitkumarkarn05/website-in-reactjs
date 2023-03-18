import React from "react";
import "./HomeSec4.css";

const HomeSec4 = () => {
  return (
    <>
      <div className="container-fluid" id="container5">
        <div className="row" id="container5_row">
          <div className="col-12" id="container5_text">
           <h1>Contact Us</h1>

            <form id="form_text">  
              <div className="form-group">
                <label for="exampleInputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  aria-describedby="nameHelp"
                  placeholder="Enter Name"
                />
              </div>

              <div className="form-group">
                <label for="exampleInputEmail">Email</label>
                <input
                  type="Email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                />
              </div>

              
              <div className="form-group">
                <label for="exampleInputEmail">Message</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputMessage1"
                  placeholder="Message"
                />
              </div>
              
              <button type="submit" className="btn btn-primary" id="btn">
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSec4;
