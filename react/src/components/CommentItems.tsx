import { Comment } from "./Comment";

export const CommentItems = (props: { comments: any[] }) => {
  const commentItems = props.comments.map((comment, index) => {
    return (
      <Comment
        id={comment.id}
        key={index}
        content={comment.content}
        user={comment.user}
      />
    );
  });

  return <>{commentItems}</>;
};
