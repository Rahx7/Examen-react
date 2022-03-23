import React from "react"
import { Icon } from "semantic-ui-react"



export const Part = (props)=>{

    return (
        <div className="part">
            <span>{props.span}</span>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <ul>
               
                {props.li.map(item=>
                     <>
                     
                     <li><Icon name="audio description" /> {item}</li>
                     </>)    }
            
            </ul>
        </div>
    )

}

