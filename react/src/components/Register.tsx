import { useState } from "react";
import { userRegister } from "../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();

    const registeredUser = userRegister({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    })
      .then((response) => {
        toast.success("Succès! Veuillez s'authentifier");
        window.location.href = "/";
      })
      .catch((error) => {
        toast.error(error.response.data);
      });

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
                      <ToastContainer />
                      <h3 className="text-center font-weight-light my-4">
                        Create Account
                      </h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input
                                className="form-control"
                                id="inputFirstName"
                                type="text"
                                placeholder="Enter your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                              <label htmlFor="inputFirstName">First name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                id="inputLastName"
                                type="text"
                                placeholder="Enter your last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                              />
                              <label htmlFor="inputLastName">Last name</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputEmail"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="inputEmail">Email address</label>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input
                                className="form-control"
                                id="inputPassword"
                                type="password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <label htmlFor="inputPassword">Password</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input
                                className="form-control"
                                id="inputPasswordConfirm"
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                              />
                              <label htmlFor="inputPasswordConfirm">
                                Confirm Password
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 mb-0">
                          <div className="d-grid">
                            <button
                              className="btn btn-primary btn-block"
                              type="button"
                              onClick={(e) => submitForm(e)}
                            >
                              Create Account
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <a href="login.html">Have an account? Go to login</a>
                      </div>
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
