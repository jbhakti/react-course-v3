import React from "react";
import Question from "./Question";

const Questions = ({ questions, activeQuestionId, toggleActiveQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeQuestionId={activeQuestionId}
            toggleActiveQuestion={toggleActiveQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
