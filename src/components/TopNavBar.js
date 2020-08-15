import React from 'react';
import { Link } from 'react-router-dom';

const TopNavBar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
    <Link className="navbar-brand" to="/">Pizza Shop</Link>

      <div className="navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/order-list">My Order</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/">Contact</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <img alt="cart" src="/images/icon-shopping-cart.png" className="navbar-cart mr-1" />
              <b>{ props.number_of_items }</b>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
  
export default TopNavBar;