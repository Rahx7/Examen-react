import React from "react"
import { Icon, Card, Image } from "semantic-ui-react"


export const CustomCard = (props)=>{

    return (

        <Card>
        <Image src={props.src} wrapped ui={false} />
          <Card.Content>
            
            <Card.Meta>{props.meta}</Card.Meta>
            <Card.Header>{props.content}</Card.Header>
          </Card.Content>
        <Card.Content extra>
          <a href={props.lien}>
            
            EN SAVOIR PLUS
            <Icon name='long arrow alternate right' />
          </a>
        </Card.Content>
      </Card>
    )

}
