import React,{ createContext, useContext,useReducer } from "react";
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
    const [{cartData,cartIds},dispatch]=useReducer(reducer,initialState)
    function addCart(item){
        const prevCartData=[...cartData]
        let quantityArray=[]
        for(let i=0;i<item.quantity;i++){
            quantityArray.push({name:i+1,value:i+1})
        }
        const tempItem={...item,quantityArray,selectedQuantity:1}
        prevCartData.push(tempItem)
        const prevCartIds=[...cartIds]
        prevCartIds.push(item.id)
        dispatch({type:"add",payload:{prevCartData,prevCartIds}})
    }
    function deleteCart(item){
       const prevCartData=cartData.filter((cart)=>{
            return cart.id!==item.id
       })
       const prevCartIds=cartIds.filter((id)=>{
        return id!==item.id
       })
       dispatch({type:"add",payload:{prevCartData,prevCartIds}})
    }
    function quantityHandler(item,e){
        console.log(e.target.value)
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
        <CartContext.Provider value={{cartData,cartIds,addCart,deleteCart,quantityHandler}}>
            {children}
        </CartContext.Provider>
    )
}
function useCart(){
    const context=useContext(CartContext)
    if(context===undefined) throw new Error("Cart Context was used outside the Cart Provider")
    console.log(context)
    return context
}
export {CartProvider,useCart}