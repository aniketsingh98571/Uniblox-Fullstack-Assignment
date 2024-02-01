import React,{useEffect,useState,useRef} from "react"
import classes from './Checkout.module.css'
import CheckoutItem from "./CheckoutItem/CheckoutItem"
import {getRequest,postRequest} from '../../ServerFunctions/axiosClient/axiosClient'
export default function Checkout(){
    const [cartData,setCartData]=useState([])
    const [discountedPrice,setDiscountPrice]=useState("")
    const priceDataRef=useRef(null)
    const [couponValue,setCouponValue]=useState("")
    const couponCode=useRef(null)
    useEffect(()=>{
        loadCheckOutData()
    },[])
    const loadCheckOutData=async()=>{
        const data=await getRequest("cart/","")
        const coupon=await getRequest("coupon/","")
        couponCode.current=coupon.data.data
        setCartData(data.data.data)
        setCouponValue(coupon.data.data)
        let price=data.data.data.reduce((total,num)=>{
            return total + (Number(num.selectedQuantity)*Number(num.price));
        },0);
        priceDataRef.current=price
        setDiscountPrice(price)
    }
    const validateCouponHandler=async()=>{
        const payload={coupon:couponValue}
        try{
            const results=await postRequest("coupon/validate",payload)
            console.log(results)
            if(results.status===200){
                let discount=Number(priceDataRef.current)-(priceDataRef.current*0.10)
                setDiscountPrice(discount)
            }
        }
        catch(err){
            console.log(err)
            alert("Invalid Coupon")
        }
    }
    const couponChangeHandler=(e)=>{
        setCouponValue(e.target.value)
    }
    const placeOrderHandler=async()=>{
        const results=await postRequest("cart/purchase",cartData)
        if(results.status===200){
            alert("Purchased Confirmed")
            window.location.href="/"
        }
    }
    return(
        <div className={classes.OuterCheckoutPage}>
            <div className={classes.InnerCheckoutPage}>
                <div className={classes.CheckoutText}>
                    <p>Checkout</p>
                </div>
                {
                    cartData.length>0?
                <div className={classes.BelowCheckoutPage}>
                    {
                        cartData&&
                    <div className={classes.LeftContainer}>
                        {
                            cartData.map((item)=>{
                               return <CheckoutItem item={item} key={item.id}/>
                            })
                        }
                    </div>
                       }
                    <div className={classes.TotalContainer}>
                        <div className={classes.SubtotalContainer}>
                            <p><span>Subtotal:</span>Rs {priceDataRef.current}</p>
                        </div>
                        <div className={classes.CouponCode}>
                          <p>Apply Coupon Code "{couponCode.current}"  for 10% discount </p>
                        </div>
                         <div className={classes.CouponCode}>
                            <input onChange={couponChangeHandler} value={couponValue} type="text" placeholder="Enter Coupon Code"/><br/>
                            <button type="button" onClick={validateCouponHandler}>Apply</button>
                        </div>
                        <div className={classes.TotalPrice}>
                            <p><span>Total Price:</span>Rs {discountedPrice}</p>
                        </div>
                        <div className={classes.PlaceOrder}>
                            <button type="button" onClick={placeOrderHandler}>Place Order</button>
                        </div>
                    </div>
                </div>:<div className={classes.NoPurchases}>
                    <p>Cart Empty</p>
                </div>
           }
            </div>
        </div>
    )
}