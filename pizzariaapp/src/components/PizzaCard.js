import React, { useEffect ,useState} from "react";
import { toast } from 'react-toastify';


function PizzaCard(props) {
    // console.log(props.shoppingCart)
    const [cartStatus, setcartStatus] = useState('Add to cart')
    var cartList=[]
    props.shoppingCart.forEach(item=>{
      cartList.push(item.id)
    })

  const handleAddToCart=(e,pizzaId)=>{
    e.preventDefault()
    setcartStatus('Added')
    fetch(`http://localhost:5000/add_to_cart/${pizzaId}`,{
      method:'get',
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      toast.success('Pizza added to cart')
      console.log(data)
    })
  }

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
          <button onClick={(e)=>handleAddToCart(e,props.pizzaData.id)}>{cartStatus}</button>
        </div>
      </div>


    </div>
  );
}

export default PizzaCard;
