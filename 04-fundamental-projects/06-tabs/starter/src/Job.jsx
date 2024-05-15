import React from "react";
import Duties from "./Duties";

const Job = ({ jobsList, currentJob }) => {
  const { title, dates, company, duties } = jobsList[currentJob];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default Job;
