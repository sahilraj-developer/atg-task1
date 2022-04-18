import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import All from "./All";
import Article from "./Article";
import Education from "./Education";
import Event from "./Event";
import Job from "./Job";
import '../App.css'

const Cards = () => {
  return (
    <div className="cardss">
      <div className="container-fluid ">
        <BrowserRouter>
        <ul>
          <li>
            <Link className="cards" to="/">
              All Post
            </Link>
          </li>
          <li>
            <Link className="cards" to="/article">
              Article
            </Link>
          </li>
          <li>
            <Link className="cards" to="/job">
              Job
            </Link>
          </li>
          <li>
            <Link className="cards" to="/education">
              Education
            </Link>
          </li>
          <li>
            <Link className="cards" to="/event">
              Event
            </Link>
          </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <All />
            </Route>
            <Route  path="/job">
              <Job />
            </Route>
            <Route path="/article">
              <Article />
            </Route>
            <Route  path="/education">
              <Education />
            </Route>
            <Route  path="/event">
              <Event />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Cards;
