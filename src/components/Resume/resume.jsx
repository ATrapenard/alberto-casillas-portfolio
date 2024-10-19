import React from "react";
import "./resume.css";
import data from "./resume_data.json";

function Resume() {
  const { workExperience, education } = data;
  return (
    <div className="resume-container">
      <div className="education-container">
        <h2>Education</h2>
        <ul>
          {education.map((entry, index) => (
            <li key={index} className="education-item">
              <h3>
                {entry.school} - {entry.major} | GPA: {entry.gpa}
              </h3>
              <p>{entry.date}</p>
              {entry.courses ? <p>Relevant Courses: {entry.courses}</p> : null}
              {entry.organization ? (
                <p>Relevant Organizations: {entry.organization}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <div className="experience-container">
        <h2>Experience</h2>
        <ul>
          {workExperience.map((entry, index) => (
            <li key={index} className="experience-item">
              <h3>{entry.company}</h3>
              <p className="item-date">{entry.date}</p>
              <p className="item-position">{entry.position}</p>
              <p className="item-description">{entry.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
