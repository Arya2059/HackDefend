import React from "react";
import { Link } from "react-router-dom";

const OrderDetails = ({ cart }) => {
  const totalPrice = cart.reduce((acc, { price, qty }) => acc + price * qty, 0);
  const totalItems = cart.reduce((acc, { qty }) => acc + qty, 0);
  const discountedPrice = totalPrice * 0.9;
  const totalDiscount = totalPrice * (1 - 0.9);

  return (
    <div className="cart-order-details-container">
      <h2 className="order-title">Order Details</h2>
      <div className="order-details__row">
        <p>
          <b>Price({totalItems} items) :</b>
        </p>
        <p className="order-price">₹ {totalPrice}</p>
      </div>
      <div className="order-details__row">
        <p>
          <b>Discount : </b>
        </p>
        <p className="order-price">- 10%</p>
      </div>
      <div className="order-details__row">
        <p>
          <b>Total Price :</b>{" "}
        </p>
        <p className="order-price">₹ {discountedPrice.toFixed()}</p>
      </div>
      <hr />
      <p className="text-style">
        You will save Rs. {totalDiscount.toFixed()} on this order{" "}
      </p>
      <Link to="/checkout">
        <button className="checkout-btn">Checkout</button>
      </Link>
    </div>
  );
};

export default OrderDetails;
