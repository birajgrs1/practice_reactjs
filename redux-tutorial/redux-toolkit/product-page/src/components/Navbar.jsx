import React from 'react'
import { Link } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const cartProducts = useSelector(state => state.cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Redux Toolkit</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Products</Link>
          </li>
        </ul>
      </div>

      <Link className='justify-content-end  m-4 basket' to='/cart' ><FaBasketShopping /><pre>{cartProducts.length}</pre>
      </Link>


    </nav>
  )
}

export default Navbar
