//importing the express 
const express = require('express');

//importing the router
const router = express.Router();
const productController=require("../controllers/Product")

router.get("/",productController.getProducts)
module.exports=router