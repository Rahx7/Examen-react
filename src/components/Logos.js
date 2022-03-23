import React from "react"
import { logos } from "./dataPart"




export const Logos = ()=>{

    return (
            <span className="logos">
                {logos.map(item => <img src={item}/> )}
            </span>
    )

}

