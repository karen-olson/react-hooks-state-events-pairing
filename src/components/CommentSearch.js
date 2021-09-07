function CommentSearch({ search, onSearchChange }) {
  function handleChange(e) {
    onSearchChange(e.target.value);
  }
  return (
    <input
      type="text"
      placeholder="Search by username"
      value={search}
      onChange={handleChange}
    ></input>
  );
}

export default CommentSearch;
