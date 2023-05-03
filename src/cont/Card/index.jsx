import React from "react"
import Adil from "./Card.module.css"
export const Card = ({name,color}) => {
    return(
        <div style={{background:color}} className={Adil.help}>
            <h3>{name}</h3>
        </div>
    )
}