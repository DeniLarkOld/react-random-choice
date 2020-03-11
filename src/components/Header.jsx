import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Switch>
          <Route path="/list">
            <NavLink to="/" className="header__link--main" title="На главную">
              &larr;
            </NavLink>
          </Route>
        </Switch>
      </div>
    </header>
  );
};
