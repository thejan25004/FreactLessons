
// use state kihipayak use karala handle karana widiya
// import logo from './logo.svg';
// import './App.css';
// import {useState} from "react";
//
// function App() {
//
//     const [username,setUsername] = useState('');
//     const [password,setPassword] = useState('');
//     const [email,setEmail] = useState('');
//     const [age,setAge] = useState('');
//     const [gender,setGender] = useState('');
//     const [country,setCountry] = useState('');
//     // hobbies kiyanne multiple value ekak - eka nisa Array ekak use karanna
//     const [hobbies,setHobbies] = useState([]);
//
//     console.log(hobbies);
//
//     const userNameHandler = (event) => {
//         console.log(event.target.value);
//         setUsername(event.target.value);
//     }
//
//     const passwordHandler = (event) => {
//         console.log(event.target.value);
//         setPassword(event.target.value);
//     }
//
//     const emailHandler = (event) => {
//         console.log(event.target.value);
//         setEmail(event.target.value);
//     }
//
//     const ageHandler = (event) => {
//         console.log(event.target.value);
//         setAge(event.target.value);
//     }
//
//     const genderHandler = (event) => {
//         console.log(event.target.value);
//         setGender(event.target.value);
//     }
//
//     const countryHandler = (event) => {
//         console.log(event.target.value);
//         setCountry(event.target.value);
//     }
//
//     const hobbiesHandler = (event) => {
//         if (event.target.checked) {
//             console.log(event.target.value);
//
//             if (!hobbies.includes(event.target.value)){
//                 setHobbies([...hobbies ,event.target.value]);
//             }
//         }else {
//             const newHobbies = hobbies.filter((hobby) => hobby !== event.target.value);
//             setHobbies(newHobbies);
//         }
//
//     }
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//
//         <form>
//           <div>
//               <label>UserName : </label>
//               <input type="text" name='username' value={username} onChange={userNameHandler} placeholder='Enter UserName'/>
//           </div>
//
//             <div>
//                <label>Passwor :</label>
//                <input type="password" name='password' value={password} onChange={passwordHandler} placeholder='Enter Password'/>
//             </div>
//
//             <div>
//                 <label>Email :</label>
//                 <input type="email" name='email' value={email} onChange={emailHandler} placeholder='Enter Email'/>
//             </div>
//
//             <div>
//                 <label>Age :</label>
//                 <input type="number" name='age' value={age} onChange={ageHandler} placeholder='Enter Age'/>
//             </div>
//
//             <div>
//                 <label>Gender :</label>
//                 <label><input type="radio" name="gender" checked={gender === 'male'} value="male" onChange={genderHandler} /> Male</label>
//                 <label><input type="radio" name="gender" checked={gender === 'female'} value="female" onChange={genderHandler} /> Female</label>
//             </div>
//
//             <div>
//                 <label>Country :</label>
//                 <select name="country" value={country} onChange={countryHandler}>
//                     <option value=''>Select Your Country : </option>
//                     <option value="srilanka">SriLanka</option>
//                     <option value="usa">USA</option>
//                     <option value="uk">UK</option>
//                     <option value="canada">Canda</option>
//                 </select>
//             </div>
//
//             <div>
//                 <label>Hobbies</label><br />
//
//
//                 <label><input type="checkbox" name="hobbies" value="reading" onChange={hobbiesHandler} /> Reading </label>
//                 <label><input type="checkbox" name="hobbies" value="playing" onChange={hobbiesHandler}/> Playing </label>
//                 <label><input type="checkbox" name="hobbies" value="watching" onChange={hobbiesHandler}/> Watching </label>
//
//
//             </div>
//
//         </form>
//
//       </header>
//     </div>
//   );
// }
//
// export default App;



// eka use state ekakin handle karana widiya

import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    // const [username,setUsername] = useState('');
    // const [password,setPassword] = useState('');
    // const [email,setEmail] = useState('');
    // const [age,setAge] = useState('');
    // const [gender,setGender] = useState('');
    // const [country,setCountry] = useState('');
    // hobbies kiyanne multiple value ekak - eka nisa Array ekak use karanna
    // const [hobbies,setHobbies] = useState([]);

    const [fieldData ,setFieldData] = useState({
        username:'',
        password:'',
        email:'',
        age:'',
        gender:'',
        country:'',
        hobbies:[]
    })


    console.log(fieldData);

    const fieldHandler = (event) => {
        const {name,value,checked,type} = event.target;
        console.log(value);


      if (type === 'checkbox'){
          if (checked){
              if (!fieldData[name].includes(value)){
                  setFieldData({...fieldData,[name]:[...fieldData[name],value]})
              }
          }else {
              const newHobbies = fieldData[name].filter((item) => item !== value);
              setFieldData({...fieldData,[name]:newHobbies})
          }

      }  else {
          setFieldData({...fieldData,[name]:value})
      }
    }


    // const userNameHandler = (event) => {
    //     console.log(event.target.value);
    //     setUsername(event.target.value);
    // }
    //
    // const passwordHandler = (event) => {
    //     console.log(event.target.value);
    //     setPassword(event.target.value);
    // }
    //
    // const emailHandler = (event) => {
    //     console.log(event.target.value);
    //     setEmail(event.target.value);
    // }
    //
    // const ageHandler = (event) => {
    //     console.log(event.target.value);
    //     setAge(event.target.value);
    // }
    //
    // const genderHandler = (event) => {
    //     console.log(event.target.value);
    //     setGender(event.target.value);
    // }
    //
    // const countryHandler = (event) => {
    //     console.log(event.target.value);
    //     setCountry(event.target.value);
    // }


    // const hobbiesHandler = (event) => {
    //     if (event.target.checked) {
    //         console.log(event.target.value);
    //
    //         if (!hobbies.includes(event.target.value)){
    //             setHobbies([...hobbies ,event.target.value]);
    //         }
    //     }else {
    //         const newHobbies = hobbies.filter((hobby) => hobby !== event.target.value);
    //         setHobbies(newHobbies);
    //     }
    //
    // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form>
          <div>
              <label>UserName : </label>
              <input type="text" name='username' value={fieldHandler.username} onChange={fieldHandler} placeholder='Enter UserName'/>
          </div>

            <div>
               <label>Passwor :</label>
               <input type="password" name='password' value={fieldHandler.password} onChange={fieldHandler} placeholder='Enter Password'/>
            </div>

            <div>
                <label>Email :</label>
                <input type="email" name='email' value={fieldHandler.email} onChange={fieldHandler} placeholder='Enter Email'/>
            </div>

            <div>
                <label>Age :</label>
                <input type="number" name='age' value={fieldHandler.age} onChange={fieldHandler} placeholder='Enter Age'/>
            </div>

            <div>
                <label>Gender :</label>
                <label><input type="radio" name="gender" checked={fieldHandler.gender === 'male'} value="male" onChange={fieldHandler} /> Male</label>
                <label><input type="radio" name="gender" checked={fieldHandler.gender === 'female'} value="female" onChange={fieldHandler} /> Female</label>
            </div>

            <div>
                <label>Country :</label>
                <select name="country" value={fieldHandler.country} onChange={fieldHandler}>
                    <option value=''>Select Your Country : </option>
                    <option value="srilanka">SriLanka</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="canada">Canda</option>
                </select>
            </div>

            <div>
                <label>Hobbies</label><br />


                <label><input type="checkbox" name="hobbies" value="reading" onChange={fieldHandler} /> Reading </label>
                <label><input type="checkbox" name="hobbies" value="playing" onChange={fieldHandler}/> Playing </label>
                <label><input type="checkbox" name="hobbies" value="watching" onChange={fieldHandler}/> Watching </label>


            </div>

        </form>

      </header>
    </div>
  );
}

export default App;


