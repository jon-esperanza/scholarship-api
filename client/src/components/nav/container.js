import './styles.css';
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "../home/home.js";
import Scholarships from "../scholarships/scholarships.js";

function Container({ location }) {
  return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 180, exit: 180 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/scholarships" component={Scholarships} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default withRouter(Container);