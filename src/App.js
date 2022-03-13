import logo from './logo.svg';
import './App.css';

//Pages
import Map from './components/Map';

//Components
import HeaderBar from './components/AppBar'

//Styles
import { GlobalStyle } from './GlobalStyle';

function App() {

  return (
    
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <GlobalStyle />
      <HeaderBar />
      <Map />
    </div>
  );
}

export default App;
