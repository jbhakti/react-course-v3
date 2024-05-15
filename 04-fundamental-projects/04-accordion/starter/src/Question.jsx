import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({
  id,
  title,
  info,
  activeQuestionId,
  toggleActiveQuestion,
}) => {
  //   const [showInfo, setShowInfo] = useState(false);
  const isActive = id === activeQuestionId;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => toggleActiveQuestion(id)}
        >
          {/* {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* {showInfo && <p>{info}</p>} */}
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default Question;
