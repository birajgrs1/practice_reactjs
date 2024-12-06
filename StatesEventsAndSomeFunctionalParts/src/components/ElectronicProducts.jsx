import Products from "./Products";

const ElectronicProducts = ({products}) => {
  return (
    <>
      <ul className="list-group">
        {products.map((item) => (
        <Products key={item} electronicItems = {item} 
        handleBuyButton = {()=> alert(`${item} bought successfully`)}></Products>
        ))}
      </ul>
    </>
  );
};
export default ElectronicProducts;
