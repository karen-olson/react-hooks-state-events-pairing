function Upvotes({ upvotes, onUpvoteClick }) {
  return <button onClick={onUpvoteClick}>{upvotes} upvotes 👍</button>;
}

export default Upvotes;
