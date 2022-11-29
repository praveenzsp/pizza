import React, { useState } from "react";
import { toast } from 'react-toastify';


function ShoppingCart(props) {
  var cartIdList = [];
  props.shoppingCart.forEach((item) => {
    cartIdList.push(item.id);
  });

  var pizzaArray = [];
  props.pizzaData.forEach((item) => {
    if (cartIdList.includes(item.id)) {
      pizzaArray.push(item);
    }
  });

  const handleRemoveFromCart = (e, pizzaId) => {
    fetch(`http://localhost:5000/remove_from_cart/${pizzaId}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Pizza removed from cart");
        console.log(data);
      });
  };
  return (
    <div className="row">
      {pizzaArray.map((item) => {
        return (
          <div
            className=" col-md-4 card"
            style={{ width: "20em", margin: "2em" }}
            key={item.id}
          >
            <img
              className="card-img-top"
              src={item.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <button
                className="btn btn-primary"
                onClick={(e) => handleRemoveFromCart(e, item.id)}
              >
                Remove from cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingCart;
