import React from "react";
import "./resume.css";

function resume() {
  return (
    <div className="resume_container">
      <div className="education_container">
        <h1>Education</h1>
        <div className="education-item">
          <h2>San Diego State University | August 2023 - December 2025</h2>
          <ul className="education-info">
            <li>Accounting, B.S. in Business Administration | GPA 3.32</li>
            <li>Member of the Student Accounting Society</li>
            <li>
              Relevant Coursework: Accounting Info Systems, Business Application
              Programming, Federal Income Taxation, Statistical Analysis for
              Business
            </li>
          </ul>
        </div>
        <div className="education-item">
          <h2>San Diego Mesa College | August 2018 - May 2022</h2>
          <ul className="education-info">
            <li>Associate in Science in Business Administration | GPA 3.79</li>
          </ul>
        </div>
      </div>
      <div className="experience_container">
        <h1>Experience</h1>
        <div className="experience-item">
          <h2>Daedastream</h2>
          <p>Manager</p>
          <ul>
            <li>
              Collaborated in the founding of Daeda Stream, a software
              development company focused on delivering custom solutions
              tailored to meet clients' unique needs.
            </li>
            <li>
              Monitored developers progress by requesting weekly updates and
              discussing projects needs to determine if additional time or
              resources is required.
            </li>
            <li>
              Managed organizational structure and human resources to foster a
              collaborative culture.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h2>Arrow Plumbing and Drain Services</h2>
          <p>Office Manager | </p>
          <ul>
            <li>
              Managed a fleet of 5 commercial vehicles ensuring they received
              regular maintenance and were stocked with essential tools and
              functioning equipment. collaborated with foremen to maintain
              inventory valued $50,000.
            </li>
            <li>
              Managed the filing and reporting of work orders and invoices for
              over 100 clients and 350 properties.
            </li>
            <li>
              Supervised small projects by monitoring progress through daily
              updates and setting daily goals.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h2>Airbnb</h2>
          <p>Host</p>
          <ul>
            <li>
              Manage property listing and bookings, created optimized listings,
              set comprehensive house rules, and ensured property cleanliness
              through regular inspections.
            </li>
            <li>
              Communicate with guest in both in English and Spanish, providing
              translation of property features and instructions to ensure a
              seamless guest experience.
            </li>
            <li>
              Maintaining a 100% response rate as a Super Host with an average
              5-star rating from over 90 guests.
            </li>
          </ul>
        </div>
      </div>
      <div className="leadership_container">
        <h1>Leadership & Professional Development</h1>
        <div className="leadership-item">
          <h2>Daedastream</h2>
          <p>Project Manager</p>
          <ul>
            <li>
              Partnered with Arrow Plumbing and Drain services to develop a
              comprehensive business management software, enabling efficient
              dispatching 5 + technicians, invoicing, payroll processing, profit
              and loss tracking, and client and invoice record keeping.
            </li>
            <li>
              Responsible for weekly meeting to gather requirements and gaining
              a deep understating of Arrow Plumbing needs, while clarifying any
              uncertainties to ensure the development of a tailored software
              solutions.
            </li>
            <li>
              Collaborated with developers to review the existing system,
              identify key features, and discuss improvements to enhance user
              experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default resume;
