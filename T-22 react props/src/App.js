import React from "react";
import { createRoot } from "react-dom";

const Student = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.age),
    React.createElement("h3", {}, props.homeTown),
  ]);
};

const StudentCard = (props) => {
  return React.createElement("div", { className: "st-card" }, [
    React.createElement("img", {
      src: "https://img.icons8.com/?size=100&id=qXmFgvt49TUA&format=png&color=000000",
      alt: "Student Image",
      ClassName: "student-image",
    }),
    React.createElement(Student, { ...props }, null),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    // "This is React"
    [
      React.createElement("h1", {}, "My React App"),
      React.createElement(
        StudentCard,
        {
          name: "Chamod",
          age: 20,
          homeTown: "Kaluthara",
        },
        null,
      ),
      React.createElement(StudentCard, {
        name: "sudam",
        age: 21,
        homeTown: "galle",
      }),
      React.createElement(StudentCard, {
        name: "Kasun",
        age: 21,
        homeTown: "Ambalangoda",
      }),
      React.createElement(StudentCard, {
        name: "sudam",
        age: 21,
        homeTown: "Kerala",
      }),
      React.createElement(StudentCard, {
        name: "sudam",
        age: 21,
        homeTown: "galle",
      }),
    ],
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
