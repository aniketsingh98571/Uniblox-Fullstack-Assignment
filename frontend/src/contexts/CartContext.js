import React,{ createContext, useContext,useReducer,useEffect } from "react";
import { postRequest,getRequest,putRequest } from "../ServerFunctions/axiosClient/axiosClient";
const CartContext=createContext()
const initialState={
    cartData:[],
    cartIds:[]
}
function reducer(state,action){
    switch(action.type){
        case 'add':
            return {...state,cartData:action.payload.prevCartData,cartIds:action.payload.prevCartIds}
        case 'update':
            return {...state,cartData:action.payload.prevCartData}
     }
}
function CartProvider({children}){
    useEffect(()=>{
        loadCartData()
    },[])
    const loadCartData=async()=>{
        const data=await getRequest("cart/","")
        const cartData=data.data.data
        const cartIds=[]
        if(cartData.length>0){
            for(let i=0;i<cartData.length;i++){
                cartIds.push(cartData[i].id)
            }
            dispatch({type:"add",payload:{prevCartData:cartData,prevCartIds:cartIds}})
        }
      
    }
    const [{cartData,cartIds},dispatch]=useReducer(reducer,initialState)
    async function addCart(item){
        let quantityArray=[]
        for(let i=0;i<item.quantity;i++){
            quantityArray.push({name:i+1,value:i+1})
        }
        let tempItem={...item,selectedQuantity:1,quantityArray}
        const payload={item:tempItem}
        try{
            const results=await postRequest("cart/add/",payload)
            if(results.status===200){
                const prevCartData=[...cartData]
                 prevCartData.push(tempItem)
                const prevCartIds=[...cartIds]
                prevCartIds.push(item.id)
                dispatch({type:"add",payload:{prevCartData,prevCartIds}})
            }
       }
       catch(err){
        console.log(err)
        alert("Something went wrong")
       }
}
 async function updateCart(item){
    console.log(item)
    const payload={action:"update",data:item}
    try{
        const results=await putRequest("cart/update",payload)
        console.log(results)
        if(results.status===200){
            alert("Cart Updated")
        }
    }
    catch(err){
        console.log(err)
        alert("Something went wrong")
    }
 }
   async function deleteCart(item){
    const payload={action:"delete",data:item}
    try{
        const results=await putRequest("cart/update",payload)
        if(results.status===200){
            const prevCartData=cartData.filter((cart)=>{
                    return cart.id!==item.id
            })
            const prevCartIds=cartIds.filter((id)=>{
                return id!==item.id
            })
            dispatch({type:"add",payload:{prevCartData,prevCartIds}})
        }
    }
    catch(err){
        console.log(err)
        alert("Something went wrong")
    }
}
    function quantityHandler(item,e){
        const prevCartData=[...cartData]
        for(let i=prevCartData.length-1;i>=0;i--){
            if(item.id===prevCartData[i].id){
                const tempObj={...prevCartData[i],selectedQuantity:e.target.value}
                prevCartData.splice(i,1,tempObj)
            }
        }
        dispatch({type:"update",payload:{prevCartData}})
    }
    return (
        <CartContext.Provider value={{cartData,cartIds,addCart,deleteCart,quantityHandler,updateCart}}>
            {children}
        </CartContext.Provider>
    )
}
function useCart(){
    const context=useContext(CartContext)
    if(context===undefined) throw new Error("Cart Context was used outside the Cart Provider")
    return context
}
export {CartProvider,useCart}