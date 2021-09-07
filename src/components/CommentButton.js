function CommentButton({ isVisible, onCommentButtonClick }) {
  return (
    <button onClick={onCommentButtonClick}>
      {isVisible ? "Hide Comments" : "Show Comments"}
    </button>
  );
}

export default CommentButton;
