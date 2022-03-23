import React, { useEffect } from 'react'
import ReactDOM from "react-dom"

export const TextLi = (prop) => {

    const ico = prop.icon

    return(
    
        <li style={{padding:"10px"}} className='item'>
           <a href={prop.lien}><i className={`ui ${ico} icon`}/>{prop.text}</a>
        </li>
    )
    
}


