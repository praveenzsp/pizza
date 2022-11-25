import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BuildPizza from "./components/BuildPizza";
import OrderPizza from "./components/OrderPizza";
import { useEffect,useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [pizzaData, setpizzaData] = useState([])
  const [toppingsData, setToppingsData] = useState([])

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


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order_pizza" element={<OrderPizza pizzaData={pizzaData} />} />
          <Route path="/build_pizza" element={<BuildPizza toppingsData={toppingsData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
