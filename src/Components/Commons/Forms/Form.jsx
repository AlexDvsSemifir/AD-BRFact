// React imports :
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";


// Components Imports :
import FactCard from "../../Commons/FactCard/FactCard";

export const Form = (props) => {
    

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
      <div>
        <form onSubmit={handleSubmit} id="FactForm">
          <div>
            <label>Titre</label>
            <input type="text" name="title" onChange={handleTitleChange} />
            <label>Auteur</label>
            <input type="text" name="nom" onChange={handleAuthorChange} />
          </div>
          <hr />
          <div>
            <label>Description</label>
            <textarea name="description" rows="10" cols="150" onChange={handleDescriptionChange} />
          </div>
          <hr />
          <div>
            <input type="submit" value="Ajouter" />
          </div>
        </form>
      </div>
      <hr />
      <div>
            <h2>Preview :</h2>
            <div>
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

export default Form;
