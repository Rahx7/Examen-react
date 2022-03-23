import React, { useEffect } from 'react'
import ReactDOM from "react-dom"
import { TextLi } from './TextLi'

export const NavBarTest = (prop) => {

    return(

        <header>
           <nav  className='ui inverted menu '  >
                <ul style={prop.style} >
                    <TextLi  icon="search" text="recherche" lien="#home"/>
                    <TextLi  icon="home" text="home" lien="#home"/>
                    <TextLi  icon="envelope" text="contact" lien="#home"/>
                    <TextLi  icon="coffee" text="about" lien="#home"/>
                </ul>
            </nav> 
        </header>
    )
    
}


