import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import NotFoundPage from "./pages/NotFoundPage";

const AppRouter = () => {
  const [start, setStart] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage start={start} setStart={setStart} />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
