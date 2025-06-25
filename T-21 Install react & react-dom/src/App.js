import React from "react";
import { createRoot } from "react-dom";

const Student = () => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, "Chamod"),
    React.createElement("h3", {}, 21),
    React.createElement("h3", {}, "Ambalangoda"),
  ]);
};

const StudentCard = () => {
  return React.createElement("div", { className: "st-card" }, [
    React.createElement("img", {
      src: "https://img.icons8.com/?size=100&id=qXmFgvt49TUA&format=png&color=000000",
      alt: "Student Image",
      ClassName: "student-image",
    }),
    React.createElement(Student),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    // "This is React"
    [
      React.createElement("h1", {}, "My React App"),
      React.createElement(StudentCard),
      React.createElement(StudentCard),
      React.createElement(StudentCard),
      React.createElement(StudentCard),
      React.createElement(StudentCard),
    ],
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
