import React from "react"
import classes from './CartItems.module.css'
import CartIem from "./CartContainer/CartItem/CartItem"
import { useCart } from "../../../contexts/CartContext"
export default function CartItems({cartItems}){
    const {cartData}=useCart()
    return (
        <div className={classes.OuterCartItem}>
            <div className={classes.TotalPriceContainer}>
                <p><span>Total Price:</span>0</p>
            </div>
            <div className={classes.InnerCartItem}>
                {
                    cartData.map((item,index)=>{
                        return (
                            <CartIem item={item} key={item.id}/>
                        )
                    })
                }
            </div>
            <div className={classes.ButtonContainer}>
                <button type="button">Update</button>
            </div>
           
        </div>
    )
}