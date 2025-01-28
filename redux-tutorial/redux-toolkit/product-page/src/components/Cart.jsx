import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CiShoppingCart } from "react-icons/ci";
import { MdRemoveShoppingCart } from "react-icons/md";
import { remove } from '../store/cartSlice';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.title}
              />
              <div className="cart-item-details">
                <h5>{item.title}</h5>
                <p className="cart-item-price">${item.price}</p>
              </div>
              <button
                className="btn btn-danger remove-btn"
                onClick={() => handleRemove(item)}
              >
                <MdRemoveShoppingCart/>
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-footer">
        <p>
          <strong>Total: </strong>
          ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </p>
        <button className="btn btn-primary checkout-btn">
          Checkout <CiShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Cart;
