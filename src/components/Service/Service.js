import React from 'react';
import './Service.css'
import img1 from '../../Illustration/Group 65@2x.png'
import img2 from '../../Illustration/Group 66@2x.png'
import img3 from '../../Illustration/Group 69@2x.png'
import img4 from '../../Illustration/Group 72@2x.png'

const Service = () => {
  return (
    <div>
      <div class="container">
        <div class="text-center grayText">
          <h3>What We Do</h3>
          <small>Our Main Focus is to make the user Experience very <br/></small>
          <small>simple and easy, Simplicity is our Strength</small>
        </div>
      <div class="space-between row text-center mb-5 mt-5">
            <div class="col-lg-3 col-md-6 col-sm-12  ">
              <div class="center cat1  ">
               <img class="w-50" src={img1} alt=""/>
               <h4>Experience Design</h4>
               <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, suscipit?</small>
               </div>
            </div>    
            <div class="col-lg-3  col-md-6 col-sm-12  ">
              <div class="center cat1  ">
               <img class="w-50" src={img2} alt=""/>
               <h4>Interface Design</h4>
               <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, suscipit?</small>
               </div>
            </div>    
            <div class="col-lg-3  col-md-6 col-sm-12 ">
              <div class="center cat1  ">
               <img class="w-50" src={img3} alt=""/>
               <h4>Prototyping</h4>
               <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, suscipit?</small>
               </div>
            </div>    
            <div class="col-lg-3 col-md-6 col-sm-12 ">
              <div class="center cat1  ">
               <img class="w-50" src={img4} alt=""/>
               <h4>Illustration</h4>
               <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, suscipit?</small>
               </div>
            </div>    
      </div>
      
      </div>
     
    </div>
  );
};

export default Service;