import React, {useContext} from "react";
import { CartContext } from "../context/cart";

const Item = (props) => {
    const cart = useContext (CartContext);
    // console.log (cart);
  return (
    <div>
      <p> name : {props.name} </p>
      <p> price : {props.price} </p>
      <button onClick = {()=>
      cart.setItems ([
        ...cart.items,{name:props.name,price:props.price},
      ])}>
         Add to Cart </button>
    </div>
  );
};
export default Item;
