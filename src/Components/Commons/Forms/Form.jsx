// React imports :
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";


// Components Imports :
import FactCard from "../../Commons/FactCard/FactCard";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './Forms.css'

export const AddForm = (props) => {
    

    let today = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    let [newFact, setNewFact] = useState({
        title:"",
        author:"",
        description:"",
        date: today
    },);

  let handleTitleChange = (e) => {
    e.preventDefault();
    setNewFact({
      ...newFact,
      title:e.target.value,
    });
  };
  let handleAuthorChange = (e) => {
    e.preventDefault();
    setNewFact({
      ...newFact,
      author:e.target.value,
    });
  };
  let handleDescriptionChange = (e) => {
    e.preventDefault();
    setNewFact({
      ...newFact,
      description:e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(newFact);
  };

  return (
    <Fragment>
      <div className="form-group">
        <Form >
        <form onSubmit={handleSubmit} id="FactForm">
          <Form.Group>
            <Form.Label>Titre</Form.Label>
            <Form.Control type="text" onChange={handleTitleChange} />
            <Form.Label>Auteur</Form.Label>
            <Form.Control type="text" onChange={handleAuthorChange} />
          </Form.Group>
          <hr />
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" size="lg" rows={5} cols={100} onChange={handleDescriptionChange} />
          </Form.Group>
          <hr />
          <div>
            {/* <input type="submit" value="Ajouter" /> */}
            <Button type="submit">Ajouter</Button>
          </div>
        </form>
        </Form>
      </div>
      <hr />
      <div>
            <h2>Preview :</h2>
            <div className="Prev">
                <FactCard 
                title={newFact.title}
                author={newFact.author}
                description={newFact.description}
                date={today}/>
            </div>
        </div>
    </Fragment>
  );
};

export default AddForm;
