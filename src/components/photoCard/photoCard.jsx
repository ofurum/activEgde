import React from 'react';

import "./photoCard.scss";

const PhotoCard = ({title, picture}) => {

    return(
        <section className="photo-card">
            <div>
               <img src={picture} alt={picture} style={{width: "100%"}}/>
            </div>
            <div className="photo-card-title">
               <h4>Title:</h4> {title}
            </div>
        </section>
    )
};

export default PhotoCard;