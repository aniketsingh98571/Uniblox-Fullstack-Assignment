const {generateCouponCode}=require("../utils/generateCoupon")
const cartController=require("../controllers/Cart")
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
exports.getPurchaseHistory=(req,res,next)=>{
    const data=cartController.getPurchaseItems()
    console.log(data,"purchased data")
    let totalItems=0,totalPurchaseAmount=0,totalDiscountAmount=0;
    let discountCodes=[]
    for(let i=0;i<data.length;i++){
        totalItems=totalItems+data[i].cartData.length
        totalPurchaseAmount=totalPurchaseAmount+data[i].totalAmount
        totalDiscountAmount=totalDiscountAmount+data[i].discountAmount
        discountCodes.push(data[i].couponApplied)
    }
    res.status(200).json({data:{totalItems,totalPurchaseAmount,totalDiscountAmount,discountCodes}})
}