import * as React from 'react';
//import './App.css';
import Enter from './Enter.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        <Enter />
        <Switch>
          <Route path="/enter">
            <Enter />
          </Route>
        </Switch>
    </Router>
     
  );
}

export default App;




