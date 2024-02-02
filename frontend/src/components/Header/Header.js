import React from "react"
import classes from './Header.module.css'
import {useCart} from '../../contexts/CartContext'
export default function Header(){
    const {cartData}=useCart()
    return (
       <div className={classes.OuterHeaderContainer}>
            <div className={classes.InnerHeaderContainer}>
                <div className={classes.BrandNameContainer}>
                    <p>Uniblox Insurance</p>
                </div>
                <div className={classes.CartButton} onClick={()=>window.location.href="/checkout"}>
                    <button type="button">CART
                      <p>{cartData.length}</p>
                    </button>
                
                </div>
            </div>
       </div>
    )
}