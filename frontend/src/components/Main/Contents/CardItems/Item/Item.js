import React from "react"
import classes from './Item.module.css'
export default function Item({insurance}){
    return (
        <div className={classes.OuterItemContainer}>
            <div className={classes.InnerItemContainer}>
                <div className={classes.CardItem}>
                    <div className={classes.ImageContainer}>
                        <img src={insurance.image} alt="insurance image"/>
                    </div>
                    <div className={classes.InsuranceName}>
                        <p><span>Name: </span>{insurance.name}</p>
                    </div>
                    <div className={classes.InsuranceCategory}>
                        <p><span>Category: </span>{insurance.category}</p>
                    </div>
                    <div className={classes.CardActions}>
                        <p>Rs {insurance.price}</p>
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}