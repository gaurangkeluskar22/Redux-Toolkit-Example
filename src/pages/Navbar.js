import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const { cart, len } = useSelector((state) => state.cart);

  return (
     
    <div className="row" style={{position:"sticky",top:"0",background:"black",zIndex:"1"}} >
      <div className="col-lg-8">
        <span className="fs-3" style={{color:"white"}}>Redux Toolkit Example</span>
        <Link to="/" className="fs-3 p-2" style={{color:"white"}}>
          Home
        </Link>
        <Link to="/Cart" className="fs-3 p-2" style={{color:"white"}}>
          Cart
        </Link>
      </div>
      <div className="col-lg-4">
        <span className="fs-3" style={{color:"white"}}>Cart Item:{len}</span>
      </div>
    </div>
  );
};

export default Navbar;
