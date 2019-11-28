import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import NoMatch from "./pages/nomatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
