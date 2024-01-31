import React,{useEffect} from "react"
import classes from './CardItems.module.css'
import Item from "./Item/Item"
import { useProducts } from "../../../../contexts/ProductContext"
export default function CardItems(){
    const {productData,loadProductData}=useProducts()
    useEffect(()=>{
        loadProductData()
    },[])
    return(
        productData.productsData&&
        <div className={classes.OuterCardContainer}>
            <div className={classes.InnerCardContainer}>
                {
                    productData.productsData.map((insurance,index)=>{
                       return <Item insurance={insurance} key={insurance.id}/>
                    })
                }
            </div>
        </div>
    )
}