import React, { useEffect, useState } from 'react'
import {Form, Button, Dropdown,TextArea  } from "semantic-ui-react"
import { Table, Flag } from 'semantic-ui-react'
import { pays } from './dataPart'


export const CustomInput = (props) => {

    const style = {

        display: "block",
        position: "relative",
        top: "-36px",
        left: "40%",
        width: 0,
        height: 0,
        opacity:0,
        margin:0,
        zIndex:"-2"
        // padding:0,
    }

    const [value,setValue]=useState(props.value)
    const [valuep,setValuep]=useState(props.value)

    function changeValue2(e){
        console.log(e)

        setValuep(e.target.firstChild.classList[0])
        // setValue(e.target)
    }

    function changeValueSelect(e){
        console.log(e)
        setValue(e.target.innerText)
        //setValue(e.target.firstChild.classList[0])
        // setValue(e.target)
    }
    const InputC = ()=>{   

                return    <Form.Input  
                        width={props.width}
                        type={props.type}                 
                        id= {props.name}
                        label= {props.label}
                        placeholder= {props.placeholder}
                        name= {props.name}
                        value={value}
                        //onChange={changeValue}
                        required
                        
                    />
                }
    
    const inputt ="2"
    const select = ()=>  
               { return <div style={{width:"50%"}}><Form.Select 
               
                    name= {props.name}
                    
                    type={props.type}                 
                    id= {props.name}
                    options={props.data} 
                    label={props.label}
                    placeholder={props.placeholder}
                    //children={<input value={value} style={{display:'none'}} />}
                    //onChange={console.log("ca change")}
                    onChange={changeValueSelect}
                    
                    
                /> <input value={value} name={props.name} style={style} className={props.name} required /></div> }
         

  const drop = ()=>  
               { 
               return <div className='sixteen wide field'>
                   <label style={{color:"#000"}}>{props.label}</label>
                   <Dropdown
                    placeholder={props.placeholder}
                    fluid
                    search
                    selection
                    options={props.data}
                    value={valuep}
                    name= "{props.name}"
                    onChange={changeValue2}
                    
                    
                /></div>  }
         
 const textArea = ()=>  
               { 
               return  <>  
               <div class="ui divider" style={{width:"100%", margin:"20px 0 50px"}}></div>
               <div className='sixteen wide field'>
                    <TextArea  

                            label={props.label}
                            placeholder={props.placeholder} 
                            style={{ minHeight: 100 }}
                            name={props.name} 
                            onChange={changeValueSelect}
                            required
                        /> 
                    </div></> }
         
   

    return    (
        <>
        {props.obj === 'input' ? InputC()
        : 
         props.obj === 'select' ? select()
        : 
        props.obj === 'dropdown' ? drop()
        :
        props.obj === 'textArea' ? textArea()
        :
        ""  
    }
                

               
        </>
    )
}