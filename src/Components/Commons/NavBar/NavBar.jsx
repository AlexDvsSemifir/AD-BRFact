import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = (props) => {
  return (
    <Fragment>
      <Nav id="NavBar" fill variant="tabs" defaultActiveKey="/Home">
        {props.pages &&
          props.pages.map((pages, index) => {
            return (
                <Nav.Item>
                  <Nav.Link>
                  <Link key={index} to={pages.to}>
                    {pages.name}
                  </Link>
                  </Nav.Link>
                </Nav.Item>
            )
          })
        }
      </Nav>
    </Fragment>
  );
};

export default NavBar;
