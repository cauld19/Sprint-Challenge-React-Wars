import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';

export default function CharacterCard(props) {

    return (
        <Col lg="6" sm="6" xs="12">
        <Card style={{ backgroundColor: '#e6e6e6', borderColor: '#333', opacity: '0.7' }}>
            <CardBody>
              <CardTitle> <h2>{props.name}</h2> </CardTitle>
              <hr />
              <CardSubtitle> <h4>Born: {props.birthYear}</h4></CardSubtitle>
              <CardText>Height: {props.height} </CardText>
              <CardText>Mass: {props.mass} </CardText>
              <CardText>Films: {props.films}</CardText>
            </CardBody>
        </Card>
        </Col>
    )
}
