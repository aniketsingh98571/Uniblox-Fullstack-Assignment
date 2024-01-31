import React,{useState,useEffect} from "react"
import classes from './Contents.module.css'
import CardItems from "./CardItems/CardItems"
import { useProducts } from "../../../contexts/ProductContext"
export default function Contents(){
    const {searchProducts,resetSearchResults,sortData}=useProducts()
    const [searchInput,setSearchInput]=useState("")
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("ran");
            if(searchInput){
                searchProducts(searchInput);
            }
            // else{
            //     resetSearchResults()
            // }
          
        }, 1000);
    
        return () => {
            clearTimeout(timer);
        };
    }, [searchInput]);
    
    const searchInputHandler = (e) => {
        setSearchInput(e.target.value);
    };
    const sortInputHandler=(e)=>{
        sortData(e.target.value)
    }
    return (
        <div className={classes.OuterContentsContainer}>
            <div className={classes.InnerContentsContainer}>
                <div className={classes.ActionsContainer}>
                    <div className={classes.SearchContainer}>
                        <input type="text" placeholder="Search Insurances..." onChange={searchInputHandler}/>
                    </div>
                    <div className={classes.SortContainer}>
                        <select name="insurances" id="insurances" onChange={sortInputHandler}>
                            <option value="All">All</option>
                            <option value="Health">Health</option>
                            <option value="Vehicle">Vehicle</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Pets">Pets</option>
                            <option value="Human">Human</option>
                        </select>    
                    </div>    
                </div>  
                <CardItems/>  
            </div>    
        </div>
    )
}