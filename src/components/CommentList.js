import Comment from "./Comment";

function CommentList({ comments, search }) {
  const filteredComments = comments.filter((comment) =>
    comment.user.includes(search)
  );

  const commentList = filteredComments.map((comment) => (
    <Comment user={comment.user} comment={comment.comment} key={comment.id} />
  ));

  return (
    <>
      <h2>{filteredComments.length} comments</h2>
      <div>{commentList}</div>
    </>
  );
}

export default CommentList;
