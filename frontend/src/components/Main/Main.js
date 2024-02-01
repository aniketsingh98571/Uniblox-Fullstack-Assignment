import React,{useEffect} from "react"
import classes from './Main.module.css'
import CartItems from "./CartItems/CartItems"
import Contents from "./Contents/Contents"
import {getRequest} from '../../ServerFunctions/axiosClient/axiosClient'
import { useProducts } from "../../contexts/ProductContext"
export default function Main(){
    const {loadProductData}=useProducts()
    useEffect(()=>{
        productLoadHandler()
    },[])
    const productLoadHandler=async()=>{
        try{
        const data=await getRequest("products/","")
        loadProductData(data.data.data)
        }catch(err){
            console.log(err)
            alert("Something went wrong")
        }
    }
    return(
        <div className={classes.OuterMainContainer}>
            <div className={classes.InnerMainContainer}>
                <div className={classes.ContentsContainer}>
                    <Contents/>
                </div>
                <div className={classes.CartItems}>
                    <CartItems/>
                </div>
            </div>
        </div>
    )
}