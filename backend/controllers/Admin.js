const {generateCouponCode}=require("../utils/generateCoupon")
let previousCoupons=[]
let currentCoupon;
exports.getCoupon=(req,res,next)=>{
    const coupon=generateCouponCode()
    console.log(coupon)
    currentCoupon=coupon
    res.status(200).json({data:coupon})
}
exports.validateCoupon=(req,res,next)=>{
    const payload=req.body
}