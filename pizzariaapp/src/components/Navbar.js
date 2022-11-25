import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import PizzeriaLogo from '../PizzeriaLogo.png'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to='/' id="brand">
            Pizzeria
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <img src="https://image.similarpng.com/very-thumbnail/2020/05/Pizza-logo-vector-PNG.png" alt='logo'/> */}
                <img src={PizzeriaLogo} alt='logo'/>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/order_pizza'>
                  Order Pizza
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/build_pizza'>
                  Build ur Pizza
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn-primary" type="submit">
              <i className="fa-solid fa-cart-shopping"></i>
                Shopping Cart
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
