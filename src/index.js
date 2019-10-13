import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ObservableObserver from './000_Observable_Observer';
import Basic from './001_Basic';
import Nested from './002_Nested';
import SideEffects from './003_SideEffects';
import FunctionComponents from './004_Function_Components';
import ReactProvider from './005_React_Provider';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/000" exact component={ObservableObserver}></Route>
          <Route path="/001" exact component={Basic}></Route>
          <Route path="/002" exact component={Nested}></Route>
          <Route path="/003" exact component={SideEffects}></Route>
          <Route path="/004" exact component={FunctionComponents}></Route>
          <Route path="/005" exact component={ReactProvider}></Route>
          <Route path="/" exact>
            <div>
              <ul>
                <li>
                  <Link to={`/000`}>000 Observable Observer</Link>
                </li>
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
                  <Link to={`/004`}>004 Function Components</Link>
                </li>
                <li>
                  <Link to={`/005`}>005 React Provider</Link>
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