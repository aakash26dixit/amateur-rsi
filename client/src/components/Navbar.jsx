import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#"></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Signin">Signin</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">Signup</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/beforeRsi">RSI</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/api">API</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;