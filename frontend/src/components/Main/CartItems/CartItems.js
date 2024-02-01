import React from "react"
import classes from './CartItems.module.css'
import CartIem from "./CartContainer/CartItem/CartItem"
import { useCart } from "../../../contexts/CartContext"
export default function CartItems(){
    const {cartData}=useCart()
    let price=cartData.reduce((total,num)=>{
        return total + (Number(num.selectedQuantity)*Number(num.price));
    },0);
    
    return (
        <div className={classes.OuterCartItem}> 
            <div className={classes.TotalPriceContainer}>
                <p><span>Total Price:</span>{price}</p>
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
        </div>
    )
}