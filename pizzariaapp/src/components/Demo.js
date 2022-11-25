import React from "react";
import PizzaCard from "./PizzaCard";

function Demo(props) {
  var x = [];
  var y = [];
  for (var i = 0; i < props.pizzaData.length; i++) {
    if (i % 2 == 0) {
      x.push(props.pizzaData[i]);
    } else {
      y.push(props.pizzaData[i]);
    }
  }
  //   console.log(x)
  //   console.log(y)

  return (
    <div className="demo-container">
      <div className="col-md-6 pizza-row">
        <div className="row">
            {
                x.map(itemX=>{
                    return <PizzaCard pizzaData={itemX}/>
                })
            }
        </div>
      </div>

      <div className="col-md-6">
        <div className="row">
            {
                y.map(itemY=>{
                    return <PizzaCard pizzaData={itemY}/>
                })
            }
        </div>
      </div>
    </div>
  );
}

export default Demo;
