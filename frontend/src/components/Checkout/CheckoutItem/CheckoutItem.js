import React from "react"
import classes from './CheckoutItem.module.css'
export default function CheckoutItem({item}){
    return(
        <div className={classes.OuterItemContainer}>
            <div className={classes.InnerItemContainer}>
                <div className={classes.ImageContainer}>
                    <img src={item.image} alt="Insurance Image"/>
                </div>
                <div className={classes.BelowContainer}>
                
                    <div className={classes.QuantityContainer}>
                    <p><span>Name: </span>{item.name}</p>
                        <p><span>Quantity: </span>5</p>
                    </div>
                    <div className={classes.PriceContainer}>
                        <p><span>Total Price</span>: Rs {item.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}