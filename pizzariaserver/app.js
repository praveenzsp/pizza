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
  
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
