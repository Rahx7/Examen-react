import React, { useEffect, useState } from 'react'
import {Accordion, AccordionContent, AccordionTitle, Icon, Container } from "semantic-ui-react"
import {CustomPart} from './CustomPart'
import { CustomForm } from './CustomForm'


export const Contact = (props) => {
  


    return    (
        <>  
         <CustomPart  {...props[0]}/>
        </>
    )
}