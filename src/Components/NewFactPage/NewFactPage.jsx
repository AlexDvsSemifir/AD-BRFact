// React imports :
import React from "react";
import { Fragment } from "react/cjs/react.production.min";

// Components Imports :

import Form from "../Commons/Forms/Form";

export const NewFactPage = (props) => {


  return (
    <Fragment>
        <div>
            <h2>Nouveau Fact :</h2>
        <Form/>
        </div>
    </Fragment>
  );
};

export default NewFactPage;
