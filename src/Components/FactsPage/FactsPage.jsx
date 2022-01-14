// React imports :
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import facts from "../../db/facts";
import FactCard from "../Commons/FactCard/FactCard";

// Components Imports :

export const FactsPage = () => {



  return (
    <Fragment>
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
    </Fragment>
  );
};

export default FactsPage;
