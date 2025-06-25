import React from "react";
import { createRoot } from "react-dom/client";
import StudentCard from "./components/StudentCard";



const App = () => {
  return (
    <div >
      <h1>My React APP</h1>
       <StudentCard  name = "Amal" age = {20} homeTown = "Colombo" />
       <StudentCard  name = "Nuwan" age = {25} homeTown = "Ambalangoda" />
       <StudentCard  name = "Sunil" age = {22} homeTown = "Galle" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

