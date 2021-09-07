function Downvotes({ downvotes, onDownvoteClick }) {
  return <button onClick={onDownvoteClick}>{downvotes} downvotes 👎</button>;
}

export default Downvotes;
