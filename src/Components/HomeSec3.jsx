import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import "./HomeSec3.css";

const HomeSec3 = () => {
  return (
    <>
      <div className="container-fluid" id="container4">
        <div className="row" id="container_row">
          <div className="col-12" id="container_content">

            <h1>Brands</h1>

            <article>
              <div
                style={{
                  animationDelay: "0.3s",
                }}
              >
                <AiFillGoogleCircle />
                <p>Google</p>
              </div>

              <div style={{ animationDelay: "0.5s" }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>
              <div
                style={{
                  animationDelay: "0.7s",
                }}
              >
                <AiFillYoutube />
                <p>Youtube</p>
              </div>

              <div
                style={{
                  animationDelay: "1s",
                }}
              >
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSec3;
