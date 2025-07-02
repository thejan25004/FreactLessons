import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Student from './Student';


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        name : "Chamod",
        age : 24
      }
    }

    render(){

      const {name,age} = this.state;

      return(
    <div className="App">
      <header className="App-header">
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

        <Student name={name} age={age}/>
      </header>
    </div>
      )
    }

}


export default App;
