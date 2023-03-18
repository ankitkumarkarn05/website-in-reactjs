import React from "react";
import "./Home.css";
import HomeSec1 from "./HomeSec1";
import HomeSec2 from './HomeSec2';
import HomeSec3 from "./HomeSec3";
import HomeSec4 from "./HomeSec4";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="container-fluid" id="container">
        <div className="row" id="banner">
          <div className="col-12 text-center" id="banner_text">
            <h1>The AnkitWebDev</h1>
            <p>Solution To All Your Problems</p>
          </div>
        </div>
      </div>

      <div>
        <HomeSec1 />
      </div>

      <div>
        <HomeSec2/>
       </div>

       <div>
        <HomeSec3/>
       </div>

       <div>
        <HomeSec4/>
       </div>

       <div>
        <Footer/>
       </div>
    </>
  );
};

export default Home;
