import React from "react"
import classes from './Main.module.css'
import CartItems from "./CartItems/CartItems"
import Contents from "./Contents/Contents"
export default function Main(){
    const cartItems=[
        {
            id:1,
            image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
            name:"Bupa Insurance",
            category:"Health",
            price:"2599",
        },
        {
            id:2,
            image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
            name:"Nuva Insurance",
            category:"Vehicle",
            price:"6599",
        },
        
    ]
    const cards=[
        {
            id:1,
            image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
            name:"Bupa Insurance",
            category:"Health",
            price:"2599",
            quantity:5
        },
        {
            id:2,
            image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
            name:"Nuva Insurance",
            category:"Vehicle",
            price:"6599",
            quantity:5
        },
        {
            id:3,
            image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
            name:"Alexis Insurance",
            category:"Pets",
            price:"2559",
            quantity:4
        },
        {
            id:4,
            image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
            name:"HDFC Insurance",
            category:"Human",
            price:"12559",
            quantity:5
        },
        {
            id:5,
            image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
            name:"Apple Insurance",
            category:"Accessories",
            price:"25559",
            quantity:3
        },

    ]
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