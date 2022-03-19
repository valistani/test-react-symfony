/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { addNewCommentToCar } from "../services/CarService";

export const CommentForm = (props: {
  carId: number;
  refreshComments: Function;
}) => {
  const [content, setContent] = useState("");
  const [loadComments, setLoadComments] = useState(false);

  useEffect(() => {
    props.refreshComments(loadComments);
  }, [loadComments]);
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const commentedCar = addNewCommentToCar({
      id: props.carId,
      content: content,
      token: localStorage.getItem("tokenData"),
    })
      .then((response) => {
        setLoadComments(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="mb-3 my-auto mx-4 col-md-11">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Commentaire
        </label>
        <textarea
          className="form-control "
          id="exampleFormControlTextarea1"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="my-2 me-1 float-end">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={(e) => handleOnSubmit(e)}
          >
            Comment
          </button>
        </div>
      </div>
    </>
  );
};
