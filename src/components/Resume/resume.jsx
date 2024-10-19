import React from "react";
import "./resume.css";
import data from "./resume_data.json";

const Resume = () => {
  const { workExperience, education } = data;
  return (
    <div className="resume-container">
      <header className="resume-header">
        <div className="overlay">
          <h1>Education and Experience</h1>
        </div>
        <div className="image-holder">
          <div className="header-image"></div>
        </div>
      </header>
      <div className="education-container">
        <div className="education-text">
          <h2>Education</h2>
        </div>
        <ul>
          {education.map((entry, index) => (
            <li key={index} className="education-item">
              <h3 className="education-school">
                {entry.school} - {entry.major} | GPA: {entry.gpa}
              </h3>
              <p className="education-date">{entry.date}</p>
              {entry.courses ? (
                <p className="education-courses">
                  Relevant Courses: {entry.courses}
                </p>
              ) : null}
              {entry.organization ? (
                <p className="education-organization">
                  Relevant Organizations: {entry.organization}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <div className="experience-container">
        <div className="experience-text">
          <h2>Experience</h2>
        </div>

        <ul>
          {workExperience.map((entry, index) => (
            <li key={index} className="experience-item">
              <h3 className="experience-company_position">
                {entry.company} | {entry.position}
              </h3>
              <p className="experience-date">{entry.date}</p>
              <ul className="experience-description">
                {entry.description.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
