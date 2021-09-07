import React, { useState } from "react";
import Upvotes from "./Upvotes";
import Downvotes from "./Downvotes";

function Video({ video }) {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  function onUpvoteClick() {
    setUpvotes((upvotes) => upvotes + 1);
  }

  function onDownvoteClick() {
    setDownvotes((downvotes) => downvotes + 1);
  }

  return (
    <>
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <div>
        <h1>React Today and Tomorrow and 90% Cleaner React with Hooks</h1>
        <span>{video.views} views | </span>
        <span>Uploaded {video.createdAt}</span>
      </div>
      <Upvotes upvotes={upvotes} onUpvoteClick={onUpvoteClick} />
      <Downvotes downvotes={downvotes} onDownvoteClick={onDownvoteClick} />
    </>
  );
}

export default Video;
