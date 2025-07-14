

// React Hooks wala *****  use Context *****  video 43


import logo from './logo.svg';
import './App.css';
import BoxA from "./BoxA";




function App() {

  return (
    <div className="App">
      {/*<header className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo" />*/}

          <div className="App">

              <BoxA  />

          </div>
      {/*</header>*/}
    </div>
  );
}

export default App;


// // React Hooks wala *****  use Effect Hook eka  *****  video 42
//
//
// import logo from './logo.svg';
// import './App.css';
// import {useEffect, useState} from "react";
//
// function App() {
//
//     const [count, setCount] = useState(0);
//     const [lastCount, setLastCount] = useState(0);
//
//     useEffect(() => {
//         // setTimeout(() => {
//         //      setCount(count + 1)
//         //  }, 2000)
//
//         console.log("use effect triggered");
//
//         return () => {
//             console.log("use effect cleaned up");
//         }
//
//     },[count])
//
//     const counter = () => {
//         setCount(count + 1)
//         if ((count + 1) % 5 === 0) {
//             setLastCount(lastCount +1 )
//         }
//
//     }
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//
//           <p>Use Effect</p>
//           <p>Count Value - {count}</p>
//           <button onClick ={counter}>Click Me</button>
//           <p>Last Count Value - {lastCount} </p>
//       </header>
//     </div>
//   );
// }
//
// export default App;



// // React Hooks wala *****  use State *****  video 41


// import logo from './logo.svg';
// import './App.css';
// import {useState} from "react";
//

//
// function App() {
//
//    // use state eka use karanna thiyena structure eka
//     const [count, setCount] = useState(0);
//
//
//   var x = 0;
//
//   const counter = () => {
//       console.log("button clicked");
//       x +=1 ;
//
//       setCount(count + 1)
//       console.log(`new value of x - ${x}`);
//   }
//
//   const  reducer = () => {
//       setCount(count - 1)
//   }
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p> value of x {x}</p>
//           <p> value of count {count}</p>
//
//           <button onClick={counter}>Click Me + </button>
//           <button onClick={reducer}>Click Me - </button>
//       </header>
//     </div>
//   );
// }
//
// export default App;




