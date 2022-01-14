import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <Fragment>
      <nav id="NavBar">
        {props.pages &&
          props.pages.map((pages, index) => {
            return (
                <button>
              <Link key={index} to={pages.to}>
                {pages.name}
              </Link>
                </button>
            )
          })
        }
      </nav>
    </Fragment>
  );
};

export default NavBar;
