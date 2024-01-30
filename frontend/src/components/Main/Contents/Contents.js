import React from "react"
import classes from './Contents.module.css'
import CardItems from "./CardItems/CardItems"
export default function Contents({cards}){
   
    return (
        <div className={classes.OuterContentsContainer}>
            <div className={classes.InnerContentsContainer}>
                <div className={classes.ActionsContainer}>
                    <div className={classes.SearchContainer}>
                        <input type="text" placeholder="Search Insurances..."/>
                    </div>
                    <div className={classes.SortContainer}>
                        <select name="insurances" id="insurances">
                            <option value="Health">Health</option>
                            <option value="Vehicle">Vehicle</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Pets">Pets</option>
                            <option value="Human">Human</option>
                        </select>    
                    </div>    
                </div>  
                <CardItems data={cards}/>  
            </div>    
        </div>
    )
}