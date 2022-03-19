import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { CarForm } from "./CarForm";
import { Home } from "./Home";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Register } from "./Register";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("tokenData");
    setLoggedIn(token ? true : false);
  }, []);

  let newCarLink = <></>;
  let loggedInLinks = <></>;
  let loggedOutLinks = <></>;

  if (loggedIn) {
    newCarLink = (
      <>
        <Link to="/car/new" className="navbar-link">
          Nouvelle voiture
        </Link>
      </>
    );
    loggedInLinks = (
      <>
        <li>
          <a href="/logout" className="dropdown-item">
            Logout
          </a>
        </li>
      </>
    );
  } else {
    loggedOutLinks = (
      <>
        <li>
          <Link to="/login" className="dropdown-item">
            Login
          </Link>
        </li>

        <li>
          <Link to="/register" className="dropdown-item">
            Register
          </Link>
        </li>
      </>
    );
  }
  return (
    <Router>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* Navbar Brand */}
        <Link to="/" className="navbar-brand ps-3">
          Start Bootstrap
        </Link>
        <div className="navbar-links">{newCarLink}</div>

        {/* Navbar */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </span>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              {loggedInLinks}

              <li>
                <hr className="dropdown-divider" />
              </li>
              {loggedOutLinks}
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car/new" element={<CarForm />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
