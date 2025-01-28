import React, { useState, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import {useDispatch } from 'react-redux';
import {add} from '../store/cartSlice';

const Products = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product)=>{
    //dispatch an action 
    dispatch(add(product));
    // console.log(dispatch(add(product)));

  }

  const cards = products.map((product) => {
    return (
      <div className="col-md-3" key={product.id}>
        <img className="card-img-top" src={product.image} alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {/* {product.description} */}${product.price}
          </p>
          <a href="#" className="btn btn-primary" onClick={()=>addToCart(product)}>
            <CiShoppingCart  />
          </a>
        </div>
      </div>
    );
  });

  return (
    <div>
      {/* <h2>All Products</h2> */}
      {/* {console.log(JSON.stringify(products))} */}

      <div className="row">{cards}</div>
    </div>
  );
};

export default Products;
