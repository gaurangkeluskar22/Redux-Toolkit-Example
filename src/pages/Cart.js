import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      {cart.map((ele) => {
        return (
          <div className="card mx-auto w-50 m-2" key={ele.id}>
            <img
              className="p-2 mx-auto"
              src={ele.image}
              style={{ width: 100 }}
            ></img>
            <button className="btn btn-primary w-50 mx-auto">
                Remove from Cart
              </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
