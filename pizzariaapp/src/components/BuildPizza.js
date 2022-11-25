import React, { useState } from "react";
import Navbar from "./Navbar";
import PizzaCard from "./PizzaCard";

function BuildPizza(props) {
  const [totalToppingsPrice, settotalToppingsPrice] = useState(0);
  const handleCheckbox = (e, price) => {
    if (e.target.checked == true) {
      settotalToppingsPrice(totalToppingsPrice + price);
    } else {
      settotalToppingsPrice(totalToppingsPrice - price);
    }
  };
  return (
    <>
      <div className="row">
        <p style={{ textAlign: "center" }}>
          Pizzeria now gives you options to build your own pizza by choosing the
          ingredients in the given list below
        </p>
      </div>

      <div className="toppingscard">
        <div className="row">
          <table class="table table-striped table-bordered">
            <tbody>
              {props.toppingsData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt="pepporoni" />
                    </td>
                    <td>
                      {item.tname} Rs: {item.price}
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          onClick={(e) => handleCheckbox(e, item.price)}
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Add
                        </label>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div
          className="row"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h6>Total cost: {totalToppingsPrice}</h6>
          <button className="col-sm-2 col-md-2">Build Your Pizza</button>
        </div>
      </div>
    </>
  );
}

export default BuildPizza;
