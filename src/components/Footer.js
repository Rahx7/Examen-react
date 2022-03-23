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
            <svg width="54" height="54" class="c-nav--footer__svgicon c-slackhash" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"></path><path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"></path><path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"></path><path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"></path></g></svg>
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