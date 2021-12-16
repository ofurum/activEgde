import React, { useState, useEffect } from "react";
import BaseUrl from "../../hooks/baseUrl"
import { useParams } from "react-router-dom";
import AlbumCard from "../../components/albumCard";
import "./album.scss"
const Albums = () => {
    const [albumsData, setAlbumsData] = useState([]);
    const [artistData, setArtistData] = useState([]);
    const [loading, setLoading] = useState(false);
    const headers = { "Content-Type": "application/json" };
    const { id } = useParams();


    const fetchalbums = async () => {
        try {
            const config = { headers };
            const res = await BaseUrl.get(`/albums?userId=${id}`, config);
            setAlbumsData(res.data);
            setLoading(true);
            return;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    const fetchArtist = async () => {
        try {
            const config = { headers };
            const res = await BaseUrl.get(`/users/${id}`, config);
            setArtistData(res.data);
            setLoading(true);
            return;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    useEffect(() => {
        fetchalbums()
        fetchArtist()
    }, [])

 

    return (
        <section className="album">
            {!loading && <p>loading...</p>} 
            <div className="artist-name">
                <h1>{artistData.name} Ablums</h1>
            </div>
            <div className="album-details">
                {loading &&
                    albumsData &&
                    albumsData.length >= 1 &&
                    albumsData.map((album, index) => (
                        <AlbumCard key={index} album={album} albumId={album.id} userId={id} />
                    ))}
            </div>


        </section>

    )
}

export default Albums;
