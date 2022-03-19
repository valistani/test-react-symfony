/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { CarEntity } from "../services/Entity";
import { CommentForm } from "./CommentForm";
import { CommentItems } from "./CommentItems";

const Car = (props: CarEntity) => {
  const comments = props.comments;
  const [refreshComments, setRefreshCommets] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("tokenData");
    setLoggedIn(token ? true : false);
  }, []);

  let commentBlock = <></>;
  if (loggedIn) {
    commentBlock = (
      <>
        <CommentItems comments={comments} />
        <CommentForm carId={props.id} refreshComments={setRefreshCommets} />
      </>
    );
  }

  useEffect(() => {
    props.refreshCars(true);
  }, [refreshComments]);
  return (
    <>
      <div className="card mb-3 col-md-9 car">
        <img src={props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.mark}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              Ajouté le {props.createdAt} par{" "}
              <b>
                {props.owner.firstName} {props.owner.lastName}
              </b>
            </small>
          </p>
        </div>
        {commentBlock}
      </div>
    </>
  );
};

export default Car;
