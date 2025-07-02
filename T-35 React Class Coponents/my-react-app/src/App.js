import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Sttudent from './Student';
import Search from './Search';

class App extends Component {

    constructor (props){
        super(props);

        this.state = {
            name:"Ruwan",
            age :25
        }
    }

    onSearch = (event) => {
        this.setState({name:event.target.value})
    }

    render (){

        const {name,age} = this.state

          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <Search onSearch = {this.onSearch} />

                <p>
                  Edit 123 <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>

             
             <Sttudent  name = {name} age = {age}/>
              </header>
            </div>
          );
        }

    }
 export default App ;