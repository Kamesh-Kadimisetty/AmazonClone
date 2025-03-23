import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    if (!dispatch) {
      console.error("Dispatch is not available.");
      return;
    }

    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, rating },
    });

    console.log("Item added to basket:", { id, title, price });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
