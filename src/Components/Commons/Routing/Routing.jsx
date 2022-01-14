
// React Imports :
import React from "react";
import { Fragment } from "react/cjs/react.development";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"

// Components Imports : 
import NavBar from "../NavBar/NavBar";
import HomePage from "../../HomePage/HomePage";
import FactsPage from '../../FactsPage/FactsPage'
import NewFactPage from '../../NewFactPage/NewFactPage'

let pages = [
    {
        to: "/Home",
        name: "HomePage"
    },
    {
        to: "/Facts",
        name: "Tous les Facts"
    },
    {
        to: "/New",
        name: "Nouveau Fact"
    },
]

export const Routing = (props) => {

    return (
      <Fragment>
          <BrowserRouter>
            <NavBar pages={pages} />
            <Routes>
                <Route path="/Home" element={<HomePage />}/>
                <Route path="/Facts" element={<FactsPage />}/>
                <Route path="/New" element={<NewFactPage />}/>
                <Route path="/" element={<Navigate to="/Home" />} />
            </Routes>
          </BrowserRouter>
      </Fragment>
    );
  }

export default Routing;