import logo from './logo.svg';
import './App.css';
import OrderedList from "./components/OrderedList";
import UnOrderedList from "./components/UnorderedList";

function App() {

  const nameList = [
    "chamod",
    "Harsha",
    "Pasan",
    "Iduwara",
    "Sunil",
    "kmala",
    "Nuwan",
    "Sunil",
    "Amal",
    "Nuwani",
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <OrderedList itemlist={nameList} />
        <UnOrderedList itemlist={nameList} />

      </header>
    </div>
  );
}

export default App;
