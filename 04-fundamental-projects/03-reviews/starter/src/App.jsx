import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const nextReview = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % reviews.length;
      return newIndex;
    });
  };

  const previousReview = () => {
    const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    return newIndex;
  };

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex++;
    }
    const newIndex = randomIndex % reviews.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={previousReview}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomReview}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
