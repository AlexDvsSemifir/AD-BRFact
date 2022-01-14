// React imports :
import React from "react";
import { Fragment } from "react/cjs/react.production.min";

// Components Imports :

export const Button = (props) => {
  return (
    <Fragment>
        <input type="button" value={props.value} onClick={props.onClick} />
    </Fragment>
  );
};

export default Button;
