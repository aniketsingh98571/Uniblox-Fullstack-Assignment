import React from "react"
import classes from './CartItems.module.css'
import CartIem from "./CartContainer/CartItem/CartItem"
export default function CartItems({cartItems}){
    return (
        <div className={classes.OuterCartItem}>
            <div className={classes.InnerCartItem}>
                {
                    cartItems.map((item,index)=>{
                        return (
                            <CartIem item={item} key={item.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}