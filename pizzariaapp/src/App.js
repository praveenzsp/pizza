import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BuildPizza from "./components/BuildPizza";
import OrderPizza from "./components/OrderPizza";
import { useEffect,useState } from "react";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCart from "./components/ShoppingCart";



function App() {
  const [pizzaData, setpizzaData] = useState([])
  const [toppingsData, setToppingsData] = useState([])
  const [shoppingCart, setshoppingCart] = useState([])
  const [globalState, setGlobalState] = useState({
    cartIdItems:[]
  })

  useEffect(()=>{
    //fetch call to get pizza data
    fetch('http://localhost:5000/order_pizza',{
      method:'get',
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setpizzaData(data)
    })
  },[])

  useEffect(()=>{
    //fetch call to get toppings data
    fetch('http://localhost:5000/build_pizza',{
      method:'get',
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setToppingsData(data)
    })
  },[])

  useEffect(()=>{
    //fetch call to get shoppingcart data
    fetch('http://localhost:5000/shoppingcart',{
      method:'get',
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setshoppingCart(data)
    })
  },[])

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order_pizza" element={<OrderPizza pizzaData={pizzaData} shoppingCart={shoppingCart}/>} />
          <Route path="/build_pizza" element={<BuildPizza toppingsData={toppingsData}/>} />
          <Route path="/shoppingcart" element={<ShoppingCart shoppingCart={shoppingCart} pizzaData={pizzaData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
