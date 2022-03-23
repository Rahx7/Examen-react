import React, { useEffect, useState } from "react"
import { Icon,Container } from "semantic-ui-react"
import { CustomForm } from './CustomForm'


export const CustomPart = (props)=>{

    
    return (

        <div className={props.page ==="contact"?"styleContact":"fond"}>
            
            <div className="part">
                <div> 
                    <span >{props.span}</span> 
                    <h1>{props.h1}</h1>
                    <p>{props.p}</p>
                    <ul>
                    
                        {
                            props.li.map(item=> 
                                <li><Icon name="check" /> {item}</li>)
                        }
                    
                    </ul> 
                    {props.page === "contact" ? <span style={{fontSize:"19px",marginTop:"40px"}}>{props.lien.textContact} </span>: "" }

                    <a href={props.lien.href} onClick={props.contact} type={props.lien.type} className={props.lien.class} style={props.lien.style} >{props.lien.text}</a>
                    
                    {props.page === "contact" ? props.logo2 : "" }

                    <p className={props.page === "contact" ?"p2 p2Contact":"p2"} >{props.p2}
                        {props.logos.map(item => <img src={item} style={{display:"block"}}/> )}
                    </p>
                    
                    <p className={props.page === "contact" ?"p2Contact":""}>{props.p3}</p>
                  
                </div>
                <div  className={props.page === "contact" ? "form": ""} >
                  
                    {props.page === "contact" ? <CustomForm /> : <img src={props.imgSrc}/>}

                </div> 
            </div>
        </div>
    )

}

