import React, { useEffect, useState } from 'react'
import {Accordion, AccordionContent, AccordionTitle, Icon, Container } from "semantic-ui-react"
import {dataFooter, dataFooterInfos} from './dataPart'
import {} from './dataPart'


export const Footer = (props) => {
  console.log(props)
    return    (
        <footer className={props.page === 'contact' ?'footContact':'foot'} >
          
          {
            props.page === 'home' ? 
            <div>
              <div>
                <h1>{dataFooterInfos[0]}</h1>
                <a href='' className='ui black basic button footerR' >{dataFooterInfos[1]}</a> 
              </div>
            </div>
            : ""
           }
         

          <div>
            <div>
                <img alt='' src=''/>
                <ul>
                  {dataFooter.map(item => 
                  (<li>
                    <ul>
                    {item.map(i => <li>{i}</li>)}
                    </ul>
                  </li>)
                    )}
                </ul>
            </div>
          </div>

          <div>
           
            <div> <span><Icon name='download cloud'/>Téléchargez Slack </span> <Icon name='facebook'/><Icon name='twitter'/> <Icon name='linkedin'/><Icon name='youtube'/><br/>{dataFooterInfos[2]} 
           </div>
            
          </div>
        </footer>
    )
}