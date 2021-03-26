import React from 'react';


const Card2 = (props) => {
    return(
         
        <div className={ `card2 ${props.className}` }>
<div class="row mb-2">
    <div class="col-md-6">
      <div class="row border: none bg-dark text-white">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Styling</strong>
          <h3 class="mb-2">Modern and classic</h3>
          
          <p class="card-text mb-auto">The styling has been done keeping in mind the latest trends while not missing out on the traditional touch.</p>
          </div>
        <div class="col-auto d-none d-lg-block">
        <img src="./style2.jpg" alt="..." style={{maxHeight: "250px", minwidth: "150px" }}/>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row border: none bg-dark text-white">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Design</strong>
          <h3 class="mb-2">Pleasing to the eye</h3>
          <p class="mb-auto">The properties have been designed which are both asthetic and efficient in using the space.</p>
          </div>
        <div class="col-auto d-none d-lg-block"> 
        <img src="./style1.jpg" alt="..." style={{maxHeight: "250px", minwidth: "150px" }}/>
        </div>
      </div>
    </div>
  </div>








        </div>
    )
}

export default Card2;