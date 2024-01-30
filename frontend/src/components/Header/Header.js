import React from "react"
import classes from './Header.module.css'
export default function Header(){
    return (
       <div className={classes.OuterHeaderContainer}>
            <div className={classes.InnerHeaderContainer}>
                <div className={classes.BrandNameContainer}>
                    <p>Uniblox Insurance</p>
                </div>
                <div className={classes.CartButton} onClick={()=>window.location.href="/checkout"}>
                    <button type="button">CART</button>
                </div>
            </div>
       </div>
    )
}