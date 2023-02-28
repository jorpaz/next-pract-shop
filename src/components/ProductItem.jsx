import React, { useContext } from "react";
import AppContext from "../context/AppContext";

//? Styles
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {

  const { addToCart } = useContext(AppContext);

  const handelClick = item => {
    addToCart(item);
    console.log(addToCart);
  }

  return (
    //? Clase 06
    <div className="ProductItem">
      <img
        src={product.images[0]} alt={product.title}
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handelClick(product)}>
          <img src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
