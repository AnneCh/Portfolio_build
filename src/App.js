import tea from './tea.png';
import './App.css';
import { Container, Button, ButtonGroup, Fab, Link } from '@mui/material';


function App() {
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
          <ButtonGroup disableElevation variant="contained">
            <Button variant="outlined" size="large"><Link href="src/Components/Developper/Projects.js"/>Developer</Button>
            <Button variant="outlined" size="large"> Multimedia</Button>
          </ButtonGroup>
          <Fab color="primary" aria-label="edit">
            <Link src="src/Components/components/Common/Contact.js"/>
          </Fab>
        </Container>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;

