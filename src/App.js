import tea from './tea.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1">Hi, I'm Anne.</h1>
        <img src={tea} className="App-logo" alt="SomeTea?" />
        <p className='first-words'>I'm honored you're willing to know more about me.<br></br>
          Please, make yourself comfortable, and stay hydrated.
        </p>
      </header>
    </div>
  );
}

export default App;
