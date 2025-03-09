import React, {useContext} from "react";
import { CartContext } from "../context/cart";

const Cart = () => {
    const cart = useContext (CartContext);

    const total = cart.items.reduce ((a,b)=> a + b.price,0);
    // console.log (cart);
  return (
    <div>
        <h1> ... Cart ... </h1>
        {cart && cart.items.map ((item) => (<li> {item.name}- ${item.price}</li>))}
      <h4> Total Bill is : ${total}</h4>
    </div>
  );
};

export default Cart;
