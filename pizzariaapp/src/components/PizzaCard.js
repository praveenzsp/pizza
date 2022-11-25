import React from "react";

function PizzaCard(props) {
  // const [pizzaData]=props.PizzaData
  // console.log("second", props);
  return (
    <div className="pizzacard">

      <div style={{ marginLeft: "20px", marginRight: "30px" }} className='col-md-3 col-sm-12'>
        <div>
          <h4>{props.pizzaData.name}</h4>
          <div 
            style={{ width: "15px", height: "15px"}}
            className={props.pizzaData.type==='veg' ? 'veg': 'non-veg'}
          ></div>
        </div>
        <div style={{ paddingTop: "1.5rem" }}>
          <h5 style={{textAlign:'center'}}>Rs:{props.pizzaData.price}</h5>
        </div>
      </div>


      <div className='col-md-6 col-sm-12'>
        <div>
          <p>{props.pizzaData.description}</p>
        </div>
        <div>
          <span>Ingredients:</span>
          <p>{props.pizzaData.ingredients+', '}</p>
        </div>
        <div>
          <span>Toppings:</span>
          <p>{props.pizzaData.topping+', '}</p>
        </div>
      </div>

      
      <div style={{ marginLeft: "20px", marginRight: "30px" }} className='col-md-3 col-sm-12'>
        <div>
          <img src={props.pizzaData.image} alt="pizza" />
        </div>
        <div>
          <button>Add to cart</button>
        </div>
      </div>


    </div>
  );
}

export default PizzaCard;
