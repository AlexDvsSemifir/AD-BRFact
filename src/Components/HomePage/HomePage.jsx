// React imports :
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import facts from "../../db/facts";
import FactCard from "../Commons/FactCard/FactCard";
import { useEffect } from "react";

// Components Imports :
import './HomePage.css'

export const HomePage = () => {

  let last = facts.length
  let secondLast = facts.length - 2  
  let factsPreview = facts.slice(secondLast, last);


  return (
    <Fragment>
        <h2>Les derniers facts :</h2>
    <div className="Group">
      {facts &&
        factsPreview.map((fact, index) => {
          return (
            <FactCard
              key={index}
              title={fact.title}
              author={fact.author}
              description={fact.description}
              date={fact.date}
            />
          );
        })}
    </div>
    </Fragment>
  );
};

export default HomePage;
