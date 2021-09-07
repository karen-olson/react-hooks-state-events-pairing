import React, { useState } from "react";
import CommentButton from "./CommentButton";
import CommentSearch from "./CommentSearch";
import CommentList from "./CommentList";

function Comments({ comments, isVisible, onCommentButtonClick }) {
  const [search, setSearch] = useState("");

  function onSearchChange(input) {
    setSearch(input);
  }

  return (
    <div>
      <br></br>
      <CommentButton
        isVisible={isVisible}
        onCommentButtonClick={onCommentButtonClick}
      />
      <br></br>
      <br></br>
      <CommentSearch search={search} onSearchChange={onSearchChange} />
      <hr></hr>
      {isVisible ? <CommentList comments={comments} search={search} /> : null}
    </div>
  );
}

export default Comments;
