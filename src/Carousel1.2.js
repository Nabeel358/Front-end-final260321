import React from 'react'

const Carousel = (props) => {
    return (
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div style={
              {
                width: '100%',
                height: '600px',
                backgroundImage: 'url(' + props.images[0] + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }
            } />
          </div>
          <div class="carousel-item">
            <div style={
              {
                width: '100%',
                height: '600px',
                backgroundImage: 'url(' + props.images[1] + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }
            } />
          </div>
        </div>
  
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
}
  
export default Carousel;
  