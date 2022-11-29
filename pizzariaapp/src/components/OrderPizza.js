import React from "react";
import PizzaCard from "./PizzaCard";

function OrderPizza(props) {

  return (
    <>
      <div className="order_pizza_container" >
        {props.pizzaData.map((item) => {
          return (
            <div className="row" key={item.id}>
              <div className="col-sm-12 col-md-12">
                <PizzaCard pizzaData={item} shoppingCart={props.shoppingCart} />
              </div>

            </div>
          );
        })}
      </div>
    </>
  );
}

export default OrderPizza;

// import React from "react";

// import PizzaCard from "./PizzaCard";

// // import Navbar from "./Navbar";

// function OrderPizza(props) {
//   // const [pizzaData] = props.pizzaData;

//   // console.log("first", props.pizzaData,typeof(props.pizzaData));

//   return (
//     <>
//       <div className="row">
//         {props.pizzaData.map((item) => {
//           return (
//             <div className="col-md-6" key={item.id}>
//               <div>
//                 <PizzaCard pizzaData={item} />
//               </div>

//               {/* <div className="col-sm-12 col-md-6">

//                 <PizzaCard pizzaData={item} />

//               </div> */}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default OrderPizza;
