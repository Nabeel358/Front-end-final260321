import React from 'react';
import NavBar from './NavBar';

function PropertiesScreen() {
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
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://res.cloudinary.com/dmkwq1ec9/image/upload/v1616616467/properties/house2_a4wmx2.jpg"/></div>
                <div class="col-md-6 mt-1">
                    <h5>Property - V001</h5>
                   
                    <div class="mt-1 mb-1 spec-1"><span>Type: Villa</span></div>
                    <div class="mt-1 mb-1 spec-1"><span>Located in Al Bateen area </span></div>
                    <p class="text-justify text-truncate para mb-0">Brand new, 4,000sqft, 4beds and bathrooms.</p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">AED 2,000,0000</h4>
                    </div>
                    <h6 class="text-success">Negotiable</h6>
                    <div class="d-flex flex-column mt-4 "><a href="http://localhost:3000/contact" class="btn btn-primary">Contact for details</a></div>
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row">
         <div class="col-md-10">
            <div class="row p-2 bg-dark border rounded mt-2 text-light">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://res.cloudinary.com/dmkwq1ec9/image/upload/v1616616466/properties/house3_r8tdkx.jpg"/></div>
                <div class="col-md-6 mt-1">
                    <h5>Property - V002</h5>
                   
                    <div class="mt-1 mb-1 spec-1"><span>Type: Villa</span></div>
                    <div class="mt-1 mb-1 spec-1"><span>Located in Al Reem Island </span></div>
                    <p class="text-justify text-truncate para mb-0">Brand new, 3,100sqft, 3beds and bathrooms.</p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">AED 1,500,0000</h4>
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
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="https://res.cloudinary.com/dmkwq1ec9/image/upload/v1616616466/properties/house1_zfow7w.jpg"/></div>
                <div class="col-md-6 mt-1">
                    <h5>Property - V003</h5>
                   
                    <div class="mt-1 mb-1 spec-1"><span>Type: Villa</span></div>
                    <div class="mt-1 mb-1 spec-1"><span>Located in Corniche </span></div>
                    <p class="text-justify text-truncate para mb-0">Brand new, 4,200sqft, 4beds and bathrooms.</p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1">AED 2,800,000</h4>
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
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="http://localhost:3000/properties">1</a>
    </li>
    <li class="page-item active"><a class="page-link" href="http://localhost:3000/properties2">2</a></li>
    <li class="page-item active"><a class="page-link" href="http://localhost:3000/properties3">3</a></li>
    <li class="page-item active">
      <a class="page-link" href="http://localhost:3000/properties2">Next</a>
    </li>
  </ul>
</nav>
















      </div>


    )
}


export default PropertiesScreen;