import React,{ createContext, useContext,useState } from "react";
const ProductContext=createContext()
// const cards=[
//     {
//         id:1,
//         image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
//         name:"Bupa Insurance",
//         category:"Health",
//         price:"2599",
//         quantity:5
//     },
//     {
//         id:2,
//         image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
//         name:"Nuva Insurance",
//         category:"Vehicle",
//         price:"6599",
//         quantity:5
//     },
//     {
//         id:3,
//         image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
//         name:"Alexis Insurance",
//         category:"Pets",
//         price:"2559",
//         quantity:4
//     },
//     {
//         id:4,
//         image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
//         name:"HDFC Insurance",
//         category:"Human",
//         price:"12559",
//         quantity:5
//     },
//     {
//         id:5,
//         image:"https://cdn.pixabay.com/photo/2022/03/13/01/33/insurance-7065113_1280.png",
//         name:"Apple Insurance",
//         category:"Accessories",
//         price:"25559",
//         quantity:3
//     },

// ]
const initialState={
    productsData:[],
    backupData:[]
}
function ProductProvider({children}){
    const [productData,setProductData]=useState(initialState)
    function loadProductData(cards){
        setProductData({...productData,productsData:cards,backupData:cards})
    }
    function searchProducts(productName){
        const results=productData.productsData.filter((product)=>{
            return product.name.toLowerCase().includes(productName.toLowerCase())
        })
        setProductData({...productData,productsData:results})
    }
    function resetSearchResults(){
        setProductData({...productData,productsData:productData.backupData})
    }
    function sortData(category){
        if(category==="All"){
            setProductData({...productData,productsData:productData.backupData})
        }
        else{
        const results=productData.backupData.filter((product)=>{
            return product.category===category
        })
        setProductData({...productData,productsData:results})
      }
    }
    return (
        <ProductContext.Provider value={{productData,loadProductData,searchProducts,resetSearchResults,sortData}}>
            {children}
        </ProductContext.Provider>
    )
}
function useProducts(){
    const context=useContext(ProductContext)
    if(context===undefined) throw new Error("Products Context was used outside the Products Provider")
    return context
}
export {ProductProvider,useProducts}