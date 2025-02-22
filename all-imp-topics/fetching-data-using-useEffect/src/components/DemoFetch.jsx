import { useEffect, useState } from "react";
import "../app.css";

const DemoFetch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch products. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) return <span className="loader"></span>;

  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="product-container">
      <h2>Product List</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.thumbnail} alt={product.title} className="product-img" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DemoFetch;
