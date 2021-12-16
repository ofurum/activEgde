import React from "react";
import { Link } from "react-router-dom"
import "./card.scss";

const Card = ({ artistDetails }) => {

    return (
        <section className="card">
            <div className="card-name">
                <h2>{artistDetails.name}</h2>
            </div>
            <div className="card-details">
                <div>
                    Email : {artistDetails.email}
                </div>
                <div>
                    Phone : {artistDetails.phone}
                </div>
                <div>
                    website : <a href={artistDetails.website}>{artistDetails.website}</a>
                </div>
            </div>
            <div className="card-buttons">
                <Link to={`/artists/${artistDetails.id}/albums`} className="d-inline-block"> <button className="btn btn-primary mt-3">View Album</button> </Link>
                <Link to={`/artists/${artistDetails.id}/tweets`} className="d-inline-block"> <button className="btn btn-success mt-3">View Tweets</button> </Link>
            </div>
        </section>
    )
};

export default Card;