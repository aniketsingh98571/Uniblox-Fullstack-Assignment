const express = require('express');
const adminController=require("../controllers/Admin")
const router = express.Router();
router.get("/",adminController.getCoupon)
router.post("/validate",adminController.validateCoupon)
router.get("/history",adminController.getPurchaseHistory)
module.exports=router