import React from 'react';
import { Link } from "react-router-dom"
import "./album.scss";

const AlbumCard = ({ album, userId, albumId }) => {

    return (
        <div className="album-card">
            <div className="album-title">
                {album.title}
            </div>
            <div className="album-photos">
                <Link to={`/artists/${userId}/albums/${albumId}/photos`}>
                    <button>View Photos</button>
                </Link>
            </div>
        </div>
    )
}

export default AlbumCard