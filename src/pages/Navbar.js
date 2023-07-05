import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const { cart, len } = useSelector((state) => state.cart);

  return (
    <div style={{ display: "flex", alignItems: "space-between" }}>
      <span className="fs-1">Redux Toolkit Example</span>
      <span className="">
        <Link to="/" className="fs-1 p-2">
          Home
        </Link>
        <Link to="/Cart" className="fs-1 p-2">
          Cart
        </Link>
      </span>
      <span className="fs-1">Cart Item:{len}</span>
    </div>
  );
};

export default Navbar;
