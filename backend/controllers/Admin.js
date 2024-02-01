const {generateCouponCode}=require("../utils/generateCoupon")
let currentCoupon;
exports.getCoupon=(req,res,next)=>{
    const coupon=generateCouponCode()
    console.log(coupon)
    currentCoupon=coupon
    res.status(200).json({data:coupon})
}
exports.validateCoupon=(req,res,next)=>{
    const payload=req.body
   if(payload.coupon===currentCoupon){
        res.status(200).json({message:"Valid Coupon"})
        currentCoupon=""
    }
    else{
        res.status(403).json({message:"Invalid Coupon"})
    }
}