import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [gender,setGender] = useState('');

    const pronounList = {
        'mr':'Male',
        'ms':'Female',
        'mrs':'Female'
    };


    const handlepronounChange = (event) => {
        const selectedPronoun = event.target.value;
        setGender(pronounList[selectedPronoun] || '');

    }

  return (
    <div className="App">
      <header className="App-header">

          <label htmlFor='pronoun'>Select Pronoun :</label>

          <select key={'pronoun'} onChange={handlepronounChange}>
              <option value="">Select Your Pronoun</option>
              <option value="mr">Mr</option>
              <option value="ms">Ms</option>
              <option value="mrs">Mrs</option>
          </select>

          <br/>

          <input type="text" placeholder="First Name" />
          <br/>
          <input type="text" placeholder="Last Name" />

          <div>
              <label>Male</label>
              <input type="radio" name="gender" value="Male" checked={gender === 'Male'} />
          </div>

          <div>
              <label>Female</label>
              <input type="radio" name="gender" value="Female" checked={gender === 'Female'}/>
          </div>

          <p>{gender}</p>
      </header>
    </div>
  );
}

export default App;
