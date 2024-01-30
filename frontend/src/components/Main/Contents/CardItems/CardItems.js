import React from "react"
import classes from './CardItems.module.css'
import Item from "./Item/Item"
export default function CardItems({data}){
    return(
        <div className={classes.OuterCardContainer}>
            <div className={classes.InnerCardContainer}>
                {
                    data.map((insurance,index)=>{
                       return <Item insurance={insurance} key={insurance.id}/>
                    })
                }
            </div>
        </div>
    )
}