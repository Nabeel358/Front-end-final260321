import React from 'react';
import NavBar from './NavBar';

function Properties2() {
    return (
      <div>

<div class="card bg-dark text-white">
  <img class="card-img "src="https://res.cloudinary.com/dmkwq1ec9/image/upload/v1616758793/properties/abu_dhabi_11_ueridt.jpg" alt="Card image" style={{maxHeight: "400px" }} />
  <div class="card-img-overlay">
    <h5 class="card-title">Abu Dhabi's no.1 source for affordable properties</h5>
    <p class="card-text">Review our available properties and contact us to  book a tour or to know more about the payment plans.</p>
    </div>
</div>



<div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10">
            
            <div class="row p-2 bg-dark border rounded mt-2 text-light">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://res.cloudinary.com/dmkwq1ec9/image/upload/v1616616467/properties/flat1_uawwcl.jpg"/></div>
                <div class="col-md-6 mt-1">
                    <h5>Property - A001</h5>
                   
                    <div class="mt-1 mb-1 spec-1"><span>Type: Apartment</span></div>
                    <div class="mt-1 mb-1 spec-1"><span>Located in Khalidiya </span></div>
                    <p class="text-justify text-truncate para mb-0">Brand new, 1,000sqft, 2beds and bathrooms.</p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">AED 1,500,000</h4>
                    </div>
                    <h6 class="text-success">Negotiable</h6>
                    <div class="d-flex flex-column mt-4"><a href="http://localhost:3000/contact" class="btn btn-primary">Contact for details</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row">
         <div class="col-md-10">
            <div class="row p-2 bg-dark border rounded mt-2 text-light">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://res.cloudinary.com/dmkwq1ec9/image/upload/v1616616466/properties/flat3_whyfka.jpg"/></div>
                <div class="col-md-6 mt-1">
                    <h5>Property - A002</h5>
                   
                    <div class="mt-1 mb-1 spec-1"><span>Type: Apartment</span></div>
                    <div class="mt-1 mb-1 spec-1"><span>Located in Maryah island </span></div>
                    <p class="text-justify text-truncate para mb-0">Brand new, 800sqft, studio.</p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">AED 500,000</h4>
                    </div>
                    <h6 class="text-success">Negotiable</h6>
                    <div class="d-flex flex-column mt-4"><a href="http://localhost:3000/contact" class="btn btn-primary">Contact for details</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row">
         <div class="col-md-10">
            <div class="row p-2 bg-dark border rounded mt-2 text-light">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://res.cloudinary.com/dmkwq1ec9/image/upload/v1616616466/properties/flat2_auwsrq.jpg"/></div>
                <div class="col-md-6 mt-1">
                    <h5>Property - A003</h5>
                   
                    <div class="mt-1 mb-1 spec-1"><span>Type: Apartment</span></div>
                    <div class="mt-1 mb-1 spec-1"><span>Located in Al Bateen </span></div>
                    <p class="text-justify text-truncate para mb-0">Brand new, 1,000sqft, 1 bed.</p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">AED 800,000</h4>
                    </div>
                    <h6 class="text-success">Negotiable</h6>
                    <div class="d-flex flex-column mt-4"><a href="http://localhost:3000/contact" class="btn btn-primary">Contact for details</a></div>
                </div>
            </div>
        </div>
    </div>
</div>


<nav aria-label="...">
  <ul class="pagination justify-content-end">
    <li class="page-item active">
      <a class="page-link" href="http://localhost:3000/properties" tabindex="-1">Previous</a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="http://localhost:3000/properties">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="http://localhost:3000/properties2">2</a></li>
    <li class="page-item active"><a class="page-link" href="http://localhost:3000/properties3">3</a></li>
    <li class="page-item active">
      <a class="page-link" href="http://localhost:3000/properties3">Next</a>
    </li>
  </ul>
</nav>



      </div>
    )
}

export default Properties2;