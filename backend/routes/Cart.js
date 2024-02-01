//importing the express 
const express = require('express');
const cartController=require("../controllers/Cart")

//importing the router
const router = express.Router();
router.get("/",cartController.getCart)
router.post("/add",cartController.addCart)
router.put("/update",cartController.updateCart)
router.post("/purchase",cartController.purchaseCart)
module.exports=router