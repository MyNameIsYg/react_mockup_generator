import logo from './logo.svg';
import './App.css';
import MockupGenerator from './Components/MockupGenerator';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const input = {
    title: 'Login Page',
    description: 'Welcome to our amazing app, please login!',
  };

  return (
    <div>
      <MockupGenerator input={input} />
    </div>
  );
}

export default App;
