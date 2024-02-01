import React from "react"
import classes from './CartItem.module.css'
import { useCart } from "../../../../../contexts/CartContext"
export default function CartIem({item}){
    const {deleteCart,quantityHandler,updateCart}=useCart()
    return(
        <div className={classes.OuterCartItem}>
            <div className={classes.InnerCartItem}>
                <div className={classes.Cart}>
                    <div className={classes.ImageContainer}>
                        <img src={item.image}/>
                    </div>
                    <div className={classes.NameContainer}>
                        <p>{item.name}</p>
                    </div>
                    <div className={classes.ActionsContainer}>.
                    <div className={classes.AmountContainer}>
                       <select name="amount" id="amount" value={item.selectedQuantity} onChange={(e)=>quantityHandler(item,e)}>
                        {
                            item.quantityArray.map((quantity)=>{
                                return (
                                     <option key={quantity.value} value={quantity.value}>{quantity.name}</option>
                                  )
                            })
                   
                         }
                           </select>    
                        </div>
                        <div className={classes.DeleteButton}>
                            <button type="button" onClick={()=>deleteCart(item)}>Delete</button>
                        </div>
                    </div>
                    <div className={classes.UpdateButton}>
                        <button type="button" onClick={()=>updateCart(item)}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}