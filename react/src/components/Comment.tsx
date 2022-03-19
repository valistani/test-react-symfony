import { CommentEntity } from "../services/Entity";

export const Comment = (props: CommentEntity) => {
  return (
    <>
      <div className="card  mx-2 card-comment">
        <div className="card-body">
          <h5 className="card-title">
            {props.user.firstName} {props.user.lastName}
          </h5>
          <p className="card-text">{props.content}</p>
        </div>
      </div>
    </>
  );
};
