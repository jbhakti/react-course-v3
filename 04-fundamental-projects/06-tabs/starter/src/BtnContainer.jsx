import React from "react";

const BtnContainer = ({ jobsList, currentItem, currentItemSetFunc }) => {
  //   const { company } = jobsList;
  return (
    <div className="btn-container">
      {jobsList.map((job, index) => {
        return (
          <button
            key={job.id}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            // onClick={() => currentItemSetFunc(job.id)}
            onClick={() => currentItemSetFunc(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
