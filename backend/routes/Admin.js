const express = require('express');
const adminController=require("../controllers/Admin")
router.get("/",adminController.getCoupon)
routes.post("/validate",adminController.validateCoupon)