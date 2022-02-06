import React from "react";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    let navigate = useNavigate();
  return (
  <div>
    <div>Cart</div>
    <button onClick={() => {
        navigate("/swap")
    }

    }>go to swap</button>
  </div>);
};

export default Cart;