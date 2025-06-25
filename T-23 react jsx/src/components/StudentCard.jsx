import Student from "../components/Student";
import React from "react";

const StudentCard = ({name,age,homeTown}) => {
    return (
      <div className="st-card">
        <img
          src="https://img.icons8.com/?size=100&id=qXmFgvt49TUA&format=png&color=000000"
          alt={`Student Image_${name}`}
          className="student-image"
        />
        <Student  name = {name} age = {age} homeTown = {homeTown} />
      </div>
    );
}

export default StudentCard ;