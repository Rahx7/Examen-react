import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'
import './app.css'
import './semantic/dist/semantic.min.css'
import 'semantic-ui-css/semantic.min.css'
import dataPart  from './components/dataPart'
import { logos, dataFoire, dataCard, dataPartContact } from './components/dataPart'
import {CustomPart} from './components/CustomPart'
import {Container } from "semantic-ui-react"
import { Foire } from './components/Foire'
import { CustomCard } from './components/CustomCard'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { Logos } from './components/Logos'



export const App = () => {

    const [page, setPage] =  useState("home")
    const [state,setState] = useState({})

    const lienContact = ()=>{
        console.log(page)
        setPage("contact")
        console.log(page)
    }

    const setPageContact=(item)=>{
            item.page = page
    }
    
    dataPartContact[0].contact = lienContact
    dataPart[0].contact  = lienContact

    useEffect(()=>{
        console.log('use effect',page)
    },[page])

    const logo2=()=>{
    dataPartContact[0]["logo2"] = <Logos />
      
    }

    return    (
        <>       
           <NavBar page={page} />
           
        { page === "home" ? 
        <>
            
            {dataPart.map((item,index)=> 
                     
                      <>
                       {setPageContact(item)} 
                        <CustomPart {...item}/>
                        {index === 0 ? <Logos /> : ""} 
                    </>   
            )}
            
                    <div className='ui cards centered'>
                    {dataCard.map( item => <CustomCard {...item} /> )}
                    </div>


                    <div className='foire'>
                    {dataFoire.map( (item,index) => {item.id = index ; return <Foire {...item} /> })}
                    </div> 
           </>

           : page  === "contact" ? <>{logo2()} <Contact {...dataPartContact}/>  </>: "page 404"}
         
           
           <Footer page={page} />
        </>
    )
    
}