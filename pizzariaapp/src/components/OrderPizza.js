import React from "react";
import PizzaCard from "./PizzaCard";
import Navbar from "./Navbar";

function OrderPizza(props) {
  // const [pizzaData] = props.pizzaData;
  // console.log("first", props.pizzaData,typeof(props.pizzaData));
  return (
    <>
      <div className="order_pizza_container" >
        {props.pizzaData.map((item) => {
          return (
            <div className="row" key={item.id}>
              <div className="col-sm-12 col-md-12">
                <PizzaCard pizzaData={item} />
              </div>
              {/* <div className="col-sm-12 col-md-6">
                <PizzaCard pizzaData={item} />
              </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OrderPizza;
