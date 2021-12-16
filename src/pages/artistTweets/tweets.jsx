import React, {useState, useEffect}from "react";
import BaseUrl from "../../hooks/baseUrl";
import {useParams, Link} from "react-router-dom";

const ArtistTweets = () => {
    const [tweetsData, setTweetsData] = useState([]);
    const [artistData, setArtistData] = useState([]);
    const [refreshData, setRefreshData] = useState(false);
    const [loading, setLoading] = useState(false);
    let headers = { "Content-Type": "application/json" };
    const { id } = useParams();
    const fetchtweets = async () => {
        try {
          const config = { headers };
          const res = await BaseUrl.get(`/comments?_limit=10`, config);
          setTweetsData(res.data);
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
      
// const deletetweet = async(id) =>{
//     try {
//         const config = { headers };
//         setLoading(false);
//         await BaseUrl.delete(`/comments/${id}`, config);
//         setRefreshData(!refreshData);
//         setLoading(true);
//         return;
//       } catch (err) {
//         console.log(err);
//         return false;
//       }
// }

      useEffect(() => {
        fetchtweets();
        fetchartist();
      }, [refreshData]);
    

    return(
        <section>
            <h1>tweets</h1>
        </section>
    )
}

export default ArtistTweets;
