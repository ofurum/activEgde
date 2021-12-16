import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import BaseUrl from "../../hooks/baseUrl"
import PhotoCard from "../../components/photoCard/photoCard";

import "./albumPhoto.scss"
const AlbumPhotos = () => {
  const [photosData, setPhotosData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = { "Content-Type": "application/json" };
  const { id, albumId } = useParams();

  const fetchphotos = async () => {
    try {
      const config = { headers };
      const res = await BaseUrl.get(`/albums/${albumId}/photos`, config);
      setPhotosData(res.data);
      console.log(res.data)
      setLoading(true);
      return;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  const fetchalbums = async () => {
    try {
      const config = { headers };
      const res = await BaseUrl.get(`/albums/${albumId}`, config);
      setAlbumData(res.data);
      console.log(res.data)
      setLoading(true);
      return;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  const fetchartist = async () => {
    try {
      const config = { headers };
      const res = await BaseUrl.get(`/users/${id}`, config);
      setArtistData(res.data);
      console.log(res.data)
      setLoading(true);
      return;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  useEffect(() => {
    fetchphotos();
    fetchalbums();
    fetchartist();
  }, []);

  return (
    <section className="album-photo">
      <div className="album-photo-title">
        <h3>
          <Link to={`/artists/${id}/albums`}> <span className="text-success">  {artistData?.name} </span> </Link>
          Album
          <span className="text-primary">  {albumData?.title} </span> Photos
        </h3>
      </div>
      <div className="album-photo-details">
        {loading &&
          photosData.map((photo, index) => (
            <div className="col" key={index}>
              <PhotoCard title={photo.title} picture={photo.thumbnailUrl} />
            </div>
          ))}
      </div>
    </section>
  )
}

export default AlbumPhotos