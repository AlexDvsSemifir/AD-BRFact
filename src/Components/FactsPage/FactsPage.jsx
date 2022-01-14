// React imports :
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import facts from "../../db/facts";
import FactCard from "../Commons/FactCard/FactCard";

// Components Imports :
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './FactsPage.css'

export const FactsPage = () => {



  return (
    <Fragment>
      <div className="Group">
      {facts &&
        facts.map((fact, index) => {
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

export default FactsPage;
