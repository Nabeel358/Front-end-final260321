import React from 'react';
import NavBar from './NavBar';

function Properties3() {
    return (
      <div>

<div class="card bg-dark text-white">
  <img class="card-img "src="https://res.cloudinary.com/dmkwq1ec9/image/upload/v1616758793/properties/abu_dhabi_11_ueridt.jpg" alt="Card image" style={{maxHeight: "400px" }} />
  <div class="card-img-overlay">
    <h5 class="card-title">Abu Dhabi's no.1 source for affordable properties</h5>
    <p class="card-text">Review our available properties and contact us to  book a tour or to know more about the payment plans.</p>
    </div>
</div>

<div id="elem">
  <div id="elem-content">Element</div>
</div>
<div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10">
            
            <div class="row p-2 bg-dark border rounded mt-2 text-light">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://res.cloudinary.com/dmkwq1ec9/image/upload/v1616619752/properties/flat4_c96b83.jpg"/></div>
                <div class="col-md-6 mt-1">
                    <h5>Property - A004</h5>
                   
                    <div class="mt-1 mb-1 spec-1"><span>Type: Apartment</span></div>
                    <div class="mt-1 mb-1 spec-1"><span>Located in Muroor area </span></div>
                    <p class="text-justify text-truncate para mb-0">Brand new, 840sqft, studio.</p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">AED 450,000</h4>
                    </div>
                    <h6 class="text-success">Negotiable</h6>
                    <div class="d-flex flex-column mt-4"> <a href="http://localhost:3000/contact" class="btn btn-primary">Contact for details</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

<h2 class= "text-white">Flexible payment options</h2>

<div class="row">
  <div class="col-sm-6">
    <div class="card bg-dark">
      <div class="card-body">
        <h5 class="card-title text-white">15 year installment plan</h5>
        <p class="card-text text-white">With a 20% downpayment, obtain the title to the property and pay the remaining installments over a 15 year period.</p>
        <a href="http://localhost:3000/contact" class="btn btn-primary">Contact our team</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-dark">
      <div class="card-body">
        <h5 class="card-title text-white">20 year installment plan (new)</h5>
        <p class="card-text text-white">No downpayment. Pay the installments over a period of 20 years and obtain the title after the end of year 5.</p>
        <a href="http://localhost:3000/contact" class="btn btn-primary">Contact our team</a>
      </div>
    </div>
  </div>
</div>


<nav aria-label="View our properties">
  <ul class="pagination justify-content-end bottom: 0 mt-5">
    <li class="page-item active">
      <a class="page-link" href="http://localhost:3000/properties2" tabindex="-1">Previous</a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="http://localhost:3000/properties">1</a>
    </li>
    <li class="page-item active"><a class="page-link" href="http://localhost:3000/properties2">2</a></li>
    <li class="page-item"><a class="page-link" href="http://localhost:3000/properties3">3</a></li>
    <li class="page-item disabled">
      <a class="page-link" href="http://localhost:3000/properties3">Next</a>
    </li>
  </ul>
</nav>











      </div>

    )
}
export default Properties3;