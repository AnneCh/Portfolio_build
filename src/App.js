import * as React from 'react';
//import './App.css';
import Enter from './Enter.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        <Enter />
        <Routes>
          <Route path="/enter">
            <Enter />
          </Route>
        </Routes>
    </Router>
     
  );
}

export default App;




