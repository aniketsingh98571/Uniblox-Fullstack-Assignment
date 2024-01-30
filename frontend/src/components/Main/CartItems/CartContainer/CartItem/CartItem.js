import React from "react"
import classes from './CartItem.module.css'
export default function CartIem({item}){
    return(
        <div className={classes.OuterCartItem}>
            <div className={classes.InnerCartItem}>
                <div className={classes.Cart}>
                    <div className={classes.ImageContainer}>
                        <img src={item.image}/>
                    </div>
                    <div className={classes.ActionsContainer}>
                        <div className={classes.AmountContainer}>
                            <select name="amount" id="amount">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>    
                        </div>
                        <div className={classes.DeleteButton}>
                            <button type="button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}