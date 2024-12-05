import Products from "./Products";

const ElectronicProducts = ({products}) => {
  return (
    <>
      <ul className="list-group">
        {products.map((item) => (
        <Products key={item} electronicItems = {item}></Products>
        ))}
      </ul>
    </>
  );
};
export default ElectronicProducts;
