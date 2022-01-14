// React imports :
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

// MUI imports


// Components Imports :


export const FactCard = (props) => {
  return (
    <Fragment>
      <Card style={{ width: '18rem' }} className="text-center" id="Card">
        <Card.Body>
            <Card.Header>{props.title}</Card.Header>
            <Card.Subtitle className="mb-2 text-muted">
            <p id="Author">Auteur : {props.author}</p>
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
            <p id="Date">Création : {props.date}</p>
            </Card.Subtitle>
            <Card.Text>
            <p>{props.description}</p>
            </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default FactCard;
