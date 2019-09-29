import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Basic from './001_Basic';
import Nested from './002_Nested';
import SideEffects from './003_SideEffects';
import LifeCircle from './004_LifeCircle';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/001" exact component={Basic}></Route>
          <Route path="/002" exact component={Nested}></Route>
          <Route path="/003" exact component={SideEffects}></Route>
          <Route path="/004" exact component={LifeCircle}></Route>
          <Route path="/" exact>
            <div>
              <ul>
                <li>
                  <Link to={`/001`}>001 Basic</Link>
                </li>
                <li>
                  <Link to={`/002`}>002 Nested</Link>
                </li>
                <li>
                  <Link to={`/003`}>003 Side Effects</Link>
                </li>
                <li>
                  <Link to={`/004`}>004 LifeCircle</Link>
                </li>
              </ul>
            </div>
          </Route>
        </Switch>
      </Router >
    );
  }
}

export default App;
ReactDOM.render(<App />, document.querySelector('#container'));