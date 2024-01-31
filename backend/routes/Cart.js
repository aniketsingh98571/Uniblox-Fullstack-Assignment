//importing the express 
const express = require('express');
const cartController=require("../controllers/Cart")

//importing the router
const router = express.Router();
router.post("/add",cartController.addCart)
router.get("/",cartController.getCart)
module.exports=router