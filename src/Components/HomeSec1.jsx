import React from 'react';
import h2 from "../Images/h2.png";
import "./HomeSec1.css"; 
const HomeSec1 = () => {
  return (
    <div className='container-fluid' id='container1'>
        <div className='row' id='section2'>
          
           <div className='col-md-5'>
            <img src={h2} alt="" className='img-fluid'/>
           </div>

           <div className='col-md-5'>
             <p>
             We are your one and only solution to the tech problems you face every day. <br />
             We are leading tech company whose aim is to increase the problem solving ability in children.
             </p>
           </div>
        </div>
    </div>
  )
}

export default HomeSec1;
