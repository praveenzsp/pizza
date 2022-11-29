var Mongodb = require("mongodb");
const express = require("express");
var cors=require('cors')
const app = express();
app.use(express.json())
app.use(cors())

var mongoClient = Mongodb.MongoClient;

const url = "mongodb://127.0.0.1:27017";

const dbName = "pizzariaDB";

mongoClient.connect(url, (err, client) => {
  if (err) {
    console.log("Unable to connect to the mongoDB server");
  } else {
    console.log("connected successfully to server");
  }
  const db = client.db(dbName);

  //route to get pizza data
  app.get("/order_pizza", (req, res) => {
    db.collection("pizza")
      .find({})
      .toArray((err, response) => {
        if (err) {
          console.log(err);
        } else {
          res.send(response);
        }
      });
  });

  //route to get ingredients data
  app.get("/build_pizza", (req, res) => {
    db.collection("ingredients")
      .find({})
      .toArray((err, response) => {
        if (err) {
          console.log(err);
        } else {
          res.send(response);
        }
      });
  }); 

  //route to get shoppingcart data
  app.get("/shoppingcart", (req, res) => {
    db.collection("shoppingcart")
      .find({})
      .toArray((err, response) => {
        if (err) {
          console.log(err);
        } else {
          res.send(response);
        }
      });
  }); 

  //route to add to cart
  // app.get('/add_to_cart/:id',(req,res)=>{
  //   db.collection('pizza').find({id:req.params.id}).toArray((err,response)=>{
  //     if(err){
  //       // console.log(err)
  //       res.send(err)
  //     }
  //     db.createCollection('shoppingcart')
  //     .then(()=>console.log('shopping cart collection created'))
  //     .then(db.collection('shoppingcart').insertOne(response,() => console.log("pizza added to cart")))
  //     console.log(response)
  //   })
  // })
    //route to add to cart
  app.get('/add_to_cart/:id',(req,res)=>{
    db.collection('shoppingcart').insertOne({id:req.params.id},()=>console.log('demo success'))
    return res.status(200).json({msg:'pizza added to cart'})
  })

    //route to remove from cart
  app.get('/remove_from_cart/:id',(req,res)=>{
    db.collection('shoppingcart').deleteOne({id:req.params.id},()=>console.log('deletion success'))
    return res.status(200).json({msg:'pizza removed from cart'})
  })
  
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
