import React from "react"
import classes from './Checkout.module.css'
import CheckoutItem from "./CheckoutItem/CheckoutItem"
export default function Checkout(){
    const cartItems=[
        {
            id:1,
            image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
            name:"Bupa Insurance",
            category:"Health",
            price:"2599",
        },
        {
            id:2,
            image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
            name:"Nuva Insurance",
            category:"Vehicle",
            price:"6599",
        },
    ]
    return(
        <div className={classes.OuterCheckoutPage}>
            <div className={classes.InnerCheckoutPage}>
                <div className={classes.CheckoutText}>
                    <p>Checkout</p>
                </div>
                <div className={classes.BelowCheckoutPage}>
                    <div className={classes.LeftContainer}>
                        {
                            cartItems.map((item)=>{
                               return <CheckoutItem item={item} key={item.id}/>
                            })
                        }
                    </div>
                    <div className={classes.TotalContainer}>
                        <div className={classes.SubtotalContainer}>
                            <p><span>Subtotal:</span>Rs 7955</p>
                        </div>
                        <div className={classes.CouponCode}>
                            <input type="text" placeholder="Enter Coupon Code"/><br/>
                            <button type="button">Apply</button>
                        </div>
                        <div className={classes.TotalPrice}>
                            <p><span>Total Price:</span>Rs 5999</p>
                        </div>
                        <div className={classes.PlaceOrder}>
                            <button type="button">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}