import React from 'react';
import Carousel from './Carousel';
import Card from './Card';
import NavBar from './NavBar';


const cardContent = [
  {
    title: 'Visit Dubai',
    description: 'Dubai is the commercial center of UAE',
    imgSrc: './dubai-night.jpg'
  },
  {
    title: 'Explore Abu Dhabi',
    description: 'Click to learn about the beautiful capital of the UAE',
    imgSrc: './zayed-mosque.jpg'
  },
  {
    title: 'Ras Al Khaimah Tour',
    description: 'The natural resort of the UAE. Click here to learn more!',
    imgSrc: 'https://images.unsplash.com/photo-1591609282229-c080f8c25ef4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
]

function MainScreen() {
  return (
    <div>

       { /* Carousel goes here */ }
       <Carousel images={['./zayed-mosque.jpg', './dubai-night.jpg']}/>

       { /* Cards go here */ }
       <div className="container my-4">
         <div className="row">

            {
              cardContent.map(
                (arrElement) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4">
                        <Card 
                            className="mb-4 m-auto"
                            title={arrElement.title}
                            imgSrc={arrElement.imgSrc}
                            description={arrElement.description}
                        />
                      </div>
                    )
                }
              )
            }
            
          </div>
       </div>

    </div>
  );
}

export default MainScreen;
