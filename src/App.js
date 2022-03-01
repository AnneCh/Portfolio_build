import tea from './tea.png';
import MainMul from './Components/MainMul.js';
import './App.css';
import { Container, Fab, Link } from '@mui/material';
import * as React from 'react';
// import PropTypes from 'prop-types';
// import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
// import { StaticRouter } from 'react-router-dom/server';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



function App() {

  // const LinkBehavior = React.forwardRef((props, ref) => (
  //   <RouterLink ref={ref} to="/" {...props} role={undefined} />
  // ));
  
  // function Router(props) {
  //   const { children } = props;
  //   if (typeof window === 'undefined') {
  //     return <StaticRouter location="/">{children}</StaticRouter>;
  //   }
  
  //   return <MemoryRouter>{children}</MemoryRouter>;
  // }

  // Router.propTypes = {
  //   children: PropTypes.node,
  // };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1">Hi, I'm Anne.</h1>
        <img src={tea} className="App-logo" alt="SomeTea?" />
        <p className='first-words'>I'm honored you're willing to know more about me.<br></br>
          Please, make yourself comfortable, and stay hydrated.
        </p>

        <Container>
          <h2 className='h2'>What do you want to know about?</h2>
            <div>
              {/* <Router>
                <Button component={RouterLink} to="src/Components/Developper/main.js">
                  Developper
                </Button>
                <Button component={LinkBehavior} to="src/Components/Multimedia/main.js">
                  Multimedia</Button>
              </Router>
            </div>
              <div> */}

          <ButtonGroup disableElevation variant="contained">
            <Button variant="outlined" size="large">
              <Link to="src/Components/Developper/main.js">
              Developer
              </Link>
            </Button>
            <Button variant="outlined" size="large"> 
            <Link to={MainMul}>Multimedia</Link>
            </Button>
          </ButtonGroup>
          <br></br> 
          <Fab color="primary" aria-label="edit">
          <Link to="src/Components/components/Common/Contact.js">
            +
          </Link>
          </Fab>
        </div>
          
        </Container>

      </header>
      <main>
      </main>
    </div>
  );
}

export default App;




