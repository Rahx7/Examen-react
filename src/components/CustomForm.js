import React, { useEffect, useState } from 'react'
import {Form, Button, Dropdown, Input } from "semantic-ui-react"
import { Table, Flag } from 'semantic-ui-react'
import { pays } from './dataPart'
import { CustomInput } from './CustomInput'
import ModalCustom from './ModalCustom'
// import { Server } from '../Server'

const goPays = ()=>{
// console.log("pays")
    dataInput[3].data = pays
}


const dataInput = [

    { width:'eight', type:'text', name:'prenom',obj:'input' ,placeholder:'Votre prénom' , label:"Prénom"},
    { width:'eight', type:'text', name:'nom',obj:'input' ,placeholder:'Votre nom' , label:"Nom"},
    { width:'sixteen', type:'email', name:'email',obj:'input',placeholder:'Renseignez votre email' , label:"E-mail" },
    { width:'sixteen', type:'', name:'pays',obj:'dropdown',placeholder:'Selectionne un pays',value:'fr' , label:"Pays",
        data: "" },
    { width:'eight', type:'text', name:'entreprise',obj:'input',placeholder:'Fiction S.A' , label:"Entreprise" },

    { width:'eight', type:'input',value:"", name:'taille',obj:'select',placeholder:'veuillez sélectionner une option',label:"Taille de l'entreprise",
            data:[
                { key: '1', text: '100.', value: '100', },
                { key: '2', text: '200', value: '2000' },
                { key: '3', text: '800', value: '800' },] },

    { width:'eight', type:'',value:"", name:'service',obj:'select',placeholder:'veuillez sélectionner une option',label:'Service',
            data:[
                { key: '1', text: 'informatique', value: 'informatique', },
                { key: '2', text: 'vente', value: 'vente' },
                { key: '3', text: 'produit', value: 'produit' },
                { key: '4', text: 'acces', value: 'acces' },
            ] },
    { width:'eight', type:'',value:"", name:'role',obj:'select',placeholder:'veuillez sélectionner une option',label:"Rôle",
            data:[
                { key: '1', text: 'cadre', value: 'cadre', },
                { key: '2', text: 'président', value: 'president' },
                { key: '3', text: 'directeur', value: 'directeur' },
                { key: '4', text: 'humoriste', value: 'humoriste' },
    ] },
    { width:'eight', type:'number', name:'numero', obj:'input' , label:"Numéro de téléphone" , placeholder:'55 55 55 55 '},
    { width:'eight', type:'', name:'aide',obj:'select',placeholder:'veuillez sélectionner une option',label:"Comment notre équipe put-elle vous aider",
            data:[
                { key: '1', text: 'Je souhaite être super content ', value: 'content', },
                { key: '2', text: 'Je suis grave à la bourre', value: 'bourre' },
                { key: '3', text: 'j\'adore les mask et les vaccin', value: 'jdeconne' },
                { key: '4', text: 'j\'aimerais qu\'il pleuve', value: 'pluie' },
    ] },
    { width:'sixteen', type:'text',value:"", name:'question',obj:'textArea' ,placeholder:'Avez-vous besoin d\'aide ?' , label:"Des questions ?"},



]
  


export const CustomForm = () => {


    const [infosModal,setInfosModal]=useState({})
    const [isOpen,setIsOpen]=useState(false)
    let infos = {}

    function envoyer(e){
        let rep = e.target.querySelectorAll('input, textArea');
        let lePays = e.target.querySelector('.search').parentElement.querySelector('div').innerText;

        rep.forEach(element => {
            console.log(element.name, element.value)
            element.name ==="" ? infos['pays']=lePays  : infos[element.name]=element.value  
                     
        });

        setInfosModal(infos)
        setIsOpen(true)

    }

    goPays()

    return (
        <>  
         <Form className='grid' onSubmit={envoyer} >
                
            {dataInput.map(item=> {
                
                return <CustomInput {...item} />
            })}

        <p style={{color:"#000"}}>{"En cliquant sur « Envoyer », je confirme avoir lu la Règles de confidentialité de Slack."}
        </p>
        <p style={{color:"#000"}}><input type="checkbox" name='check' required/> {"Oui, j’accepte de recevoir des communications marketing à propos de Slack. Si je change d’avis, je peux me désinscrire à tout moment.Les champs marqués d’un astérisque (*) sont obligatoires."}</p>
        <div className='sixteen wide field'><Button type='submit' className='primary'>Envoyer</Button> </div>
        </Form>
        {isOpen ? <ModalCustom {...infosModal}/> : null}
        </>
    )
}
