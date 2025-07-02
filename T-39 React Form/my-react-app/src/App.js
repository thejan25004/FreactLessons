import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');

    const userNameHandler = (event) => {
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    const passwordHandler = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    const emailHandler = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    const ageHandler = (event) => {
        console.log(event.target.value);
        setAge(event.target.value);
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form>
          <div>
              <label>UserName : </label>
              <input type="text" name='username' value={username} onChange={userNameHandler} placeholder='Enter UserName'/>
          </div>

            <div>
               <label>Passwor :</label>
               <input type="password" name='password' value={password} onChange={passwordHandler} placeholder='Enter Password'/>
            </div>

            <div>
                <label>Email :</label>
                <input type="email" name='email' value={email} onChange={emailHandler} placeholder='Enter Email'/>
            </div>

            <div>
                <label>Age :</label>
                <input type="number" name='age' value={age} onChange={ageHandler} placeholder='Enter Age'/>
            </div>

            <div>
                <label>Gender :</label>
                <input type="radio" name="gender" value="Male" />
                <input type="radio" name="gender" value="Female" />
            </div>

        </form>

      </header>
    </div>
  );
}

export default App;
