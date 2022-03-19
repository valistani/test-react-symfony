import { useState } from "react";
import { addNewCar } from "../services/CarService";

export const CarForm = () => {
  const [photo, setPhoto] = useState("");
  const [mark, setMark] = useState("");
  const [description, setDescription] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    const createdCar = addNewCar({
      photo: photo,
      mark: mark,
      description: description,
      token: localStorage.getItem("tokenData"),
    })
      .then((response) => {
        window.location.href = "/";
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });

    console.log(createdCar);

    return undefined;
  };

  return (
    <>
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Nouvelle Voiture
                      </h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input
                                className="form-control"
                                id="inputPhoto"
                                type="text"
                                placeholder="https://www.domain.com/image/profile.png"
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)}
                              />
                              <label htmlFor="inputPhoto">Image URL</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                id="inputMark"
                                type="text"
                                placeholder="Toyota V8"
                                value={mark}
                                onChange={(e) => setMark(e.target.value)}
                              />
                              <label htmlFor="inputMark">Mark</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-floating mb-3">
                          <textarea
                            className="form-control"
                            id="inputDescription"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                          <label htmlFor="inputDescription">Description</label>
                        </div>

                        <div className="mt-4 mb-0">
                          <div className="d-grid">
                            <button
                              className="btn btn-primary btn-block"
                              type="button"
                              onClick={(e) => submitForm(e)}
                            >
                              Ajouter une voiture
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
