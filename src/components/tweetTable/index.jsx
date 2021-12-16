import React from "react";

import "./tweetTable.scss"

const Tweet = ({comment, handleDelete}) => {
  return (
      <div className="tweet-table">
          <div className="tweet-table-details">
             
               <h4>{ comment.body }</h4>
         
              <span style={{color: "grey"}}>{ comment.name }</span>
          </div>
          <div className="tweet-controls">
              <div>
                <p>Edit</p>
              </div>
              <div>
               <p style={{color: "red"}} onClick={() => handleDelete(comment.id)}>Delete</p>
              </div>
             
          </div>
      </div>

  );
};

export default Tweet;