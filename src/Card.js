import React from 'react';

const Card = (props) => {
    return(
        <div className={ `card bg-dark ${props.className}`}>
            <img src={props.imgSrc} className="card-img-top" alt="..." style={{maxHeight: "200px", minwidth: "200%" }}/>
            <div style={{minHeight: "170px", minwidth: "300%" }}>
            <div className="card-body text-center bg-dark text-white">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div style={{paddingTop: "5%" }}>
                <a href="http://localhost:3000/properties" className="btn btn-primary">Explore</a>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Card;