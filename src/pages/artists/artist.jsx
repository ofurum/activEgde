import React, {useEffect, useState} from "react";
import BaseUrl from "../../hooks/baseUrl";
import Card from "../../components/card";
import "./artist.scss"
const Artists = () => {
 const  [artistsData, setArtistsData] = useState([]);
 let headers = { "Content-Type": "application/json" };
 
 let fetchArtists = async () => {
     try{
        const config = { headers };
        const res = await BaseUrl.get("/users", config);
        setArtistsData(res.data);
     }catch(error){
         console.log(error)
     }
 }

 useEffect(() => {
    fetchArtists()
 }, [])


    return(
        <section className="artist">
            <div className="title">
              <h1>List of All Chocolate-city Artists</h1>
            </div>
            <div className="artist-list">
            {
                artistsData.map(artist => (
                    <Card key={artist.id} artistDetails = {artist} />
                ))
            }
             
            </div>
           
        </section>
    )
};

export default Artists;