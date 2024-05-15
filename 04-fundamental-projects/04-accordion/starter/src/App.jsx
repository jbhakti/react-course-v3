import { useState } from "react";
import questionsData from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(questionsData);
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  const toggleActiveQuestion = (id) => {
    const newActiveQuestionId = id === activeQuestionId ? null : id;
    setActiveQuestionId(newActiveQuestionId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeQuestionId={activeQuestionId}
        toggleActiveQuestion={toggleActiveQuestion}
      />
    </main>
  );
};
export default App;
