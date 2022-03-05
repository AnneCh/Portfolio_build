import tea from './tea.png';
import Enter from './Enter.js';
import './App.css';
import { Container } from '@mui/material';
import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
      
            <Router>
              <Switch>
                <Route exact path="/Enter" component={Enter}>
                  <Enter/>
                </Route>
              </Switch>
          </Router>
          </Container>
          </header>
      </div>
  );
}

export default App;




