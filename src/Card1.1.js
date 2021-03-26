import React from 'react';

const Card = (props) => {
    return(
         
        <div className={ `card ${props.className}` }>
            
            <img src={props.imgSrc} className="card-img-top" alt="..." style={{maxHeight: "230px", minwidth: "200%" }}/>
            <div style={{minHeight: "170px", minwidth: "300%" }}>
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div style={{paddingTop: "5%" }}>  
                <a href="#" className="btn btn-dark"      >Explore </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card;