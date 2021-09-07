import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video";
import Comments from "./Comments";

function App() {
  // console.log("Here's your data:", video);
  const [isVisible, setVisibility] = useState(true);

  function onCommentButtonClick() {
    setVisibility(!isVisible);
  }

  return (
    <div className="App">
      <Video video={video} />
      <Comments
        comments={video.comments}
        isVisible={isVisible}
        onCommentButtonClick={onCommentButtonClick}
      />
    </div>
  );
}

export default App;
