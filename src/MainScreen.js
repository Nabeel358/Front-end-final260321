import React from 'react';
import Carousel from './Carousel';
import Card from './Card';
import NavBar from './NavBar';
import Grid from './Grid';
import Card2 from './Card2';


const cardContent = [
  {
    title: 'Affordable properties',
    description: 'Something for everyone',
    imgSrc: './house2.jpg'
  },
  {
    title: 'Explore our villas',
    description: 'In the heart of Abu Dhabi',
    imgSrc: './house3.jpg'
  },
  {
    title: 'View our apartments',
    description: 'For bachelors and families',
    imgSrc: './apartment1.jpg'
  },
]

function MainScreen() {
  return (
    <div>

      { /* Carousel goes here */ }
       <Carousel images={['./abudhabi1.jpg', './house1.jpg']}/>


       <div class="tcontainer">
        <div class="ticker-wrap">
            <div class="ticker-move">
                <div class="ticker-item">Best time to invest in your own home.</div>
                <div class="ticker-item">Property prices down by 13% in Q1 2021.</div>
                <div class="ticker-item">With the successful implementation of the covid vaccination plan, the UAE economy is expected to rebound.</div>
             </div>
        </div>
    </div>





       { /* Cards go here */ }
       <div className="container-fluid my-4 mb-5">
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
    {/*Card2 included here*/} 
    <div>
     <Card2 className="bg-white">

     </Card2>

      </div>


      {/*Grid*/}

    <div className="container-fluid border: none mt-5">
    <div className="row ">
   
    <Grid
         className="background: #1A5276">


    </Grid>
  </div>  
  </div>





    </div>





  );
}



 










export default MainScreen;
