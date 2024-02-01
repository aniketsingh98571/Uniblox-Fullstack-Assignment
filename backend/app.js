//importing the express for handling and heavy lifting the server
const express = require("express");

//importing the Body Parser for parsing the url encoded JSON formats
const bodyParser = require("body-parser");

//importing the CORS to resolve all the CORS errors
const cors = require("cors");

const app = express();

//using the cors package
app.use(cors());
const productRoutes=require('./routes/Products')
const cartRoutes=require("./routes/Cart")

//function to set headers for the cors
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  //using the bodyParser
app.use(bodyParser.json()); //application/json



app.use("/products", productRoutes);
app.use("/cart",cartRoutes)
// Solving the CORS errors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //Allowing the access from all the domains
    //allowing the following methods
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    //allowing the all headers
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });
  app.listen(8080);
  console.log("listening") 