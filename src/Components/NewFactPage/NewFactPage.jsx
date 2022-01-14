// React imports :
import React from "react";
import { Fragment } from "react/cjs/react.production.min";

// Components Imports :

import AddForm from "../Commons/Forms/Form";

export const NewFactPage = (props) => {


  return (
    <Fragment>
        <div>
            <h2>Nouveau Fact :</h2>
        <AddForm/>
        </div>
    </Fragment>
  );
};

export default NewFactPage;
