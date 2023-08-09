import React, { useEffect, useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalCustom =(props)=> {
  const [open, setOpen] = useState(true)
  const [result, setResult] = useState('')

  useEffect(()=>{
    console.log("mes props modal ",props)
  },[open])
  
  const p =()=>{
    let html=[]
    Object.entries(props).forEach(([key,value])=>{
      console.log("testttttttt")
      html.push(<div style={{fontSize:"22px",lineHeight:"25px"}} className="ui four column grid"> <div className='column' style={{color:"#ccc", padding:"2px"}}>{key}:</div> <div className='column' style={{ padding:"2px"}}>{value}</div></div>)
     })

  return (<div>{html}</div>)
  }

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'    
    >
      <Header icon>
        <Icon name='archive' />
        Voici la réponse au formulaire, j'ai voulu faire un server node pour recup les infos du formulaire et créer un fichiers avec mais c'est un peu galere j'ai pas le temps et c'était pas demandé
      </Header>
      <Modal.Content>
        <p>
          mes reponses du formulaire
        </p>
          {p()}
       
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Ok j'ai capté
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalCustom
