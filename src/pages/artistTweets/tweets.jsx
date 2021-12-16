import React, { useState, useEffect } from "react";
import BaseUrl from "../../hooks/baseUrl";
import { useParams} from "react-router-dom";
import Tweet from "../../components/tweetTable"
import "./tweets.scss"
const ArtistTweets = () => {
    const [tweetsData, setTweetsData] = useState([]);
    const [artistData, setArtistData] = useState([]);
    const [newTweet, setNewTweet] = useState("");
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

    const updateTweet = () => {

    }

    const deletetweet = async(id) =>{
        console.log("hello", id)
        try {
            const config = { headers };
            setLoading(false);
            await BaseUrl.delete(`/comments/${id}`, config);
            setLoading(true);
            return;
          } catch (err) {
            console.log(err);
            return false;
          }
    }

    useEffect(() => {
        fetchtweets();
        fetchartist();
    }, []);


    return (
        <section className="tweet-page">
            {
                !loading ? <p>loading...</p> : (
                    <>
                        <h1>{artistData.name}'s tweets</h1>
                        <div className="tweet-details">
                            <textarea placeholder="Enter new tweet..." className="text-area" onChange={(e) => setNewTweet(e.target.value)}></textarea>
                        </div>
                        <div className="tweet-placeholders">
                            <h2>Recent tweets</h2>
                            <div>
                                {loading &&
                                    tweetsData.map((comment, index) => (
                                        <div key={index}>
                                            <Tweet comment={comment} handleDelete={deletetweet} />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </>

                )
            }

        </section>
    )
}

export default ArtistTweets;
