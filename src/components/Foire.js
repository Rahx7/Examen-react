import React, { useEffect, useState } from 'react'
import {Accordion, AccordionContent, AccordionTitle, Icon, Container } from "semantic-ui-react"


export const Foire = (props) => {
  const [state, setState] = useState({ activeIndex: -1 })
  const { activeIndex } = state

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex }  = state
    const newIndex = activeIndex === index ? -1 : index

    setState({ activeIndex: newIndex })
  }


    return    (
        <>  
        { props.id === 0 ? <h1>Foire aux questions</h1> : ""}     
         <Accordion>
          
            <AccordionTitle 
              active={activeIndex === props.id}
              index={props.id}
              onClick={handleClick}   >
                {props.title} <Icon name='dropdown' />

            </AccordionTitle>
            <AccordionContent  active={activeIndex === props.id} >
               <p> {props.content} </p> 
           </AccordionContent>
        
         </Accordion>
        </>
    )
}