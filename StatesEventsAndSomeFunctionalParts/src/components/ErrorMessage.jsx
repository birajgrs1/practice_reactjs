const ErrMessage = ({products}) => {

  return (
    <>
      {products.length === 0 && <h4>No Electronic items available!!!</h4>}
    </>
  );
};
export default ErrMessage;