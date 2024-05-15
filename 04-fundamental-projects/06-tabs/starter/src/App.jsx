const url = "https://www.course-api.com/react-tabs-project";
import { useState } from "react";
import { useEffect } from "react";
import BtnContainer from "./BtnContainer";
import Job from "./Job";

const App = () => {
  const [jobsList, setJobsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const currentItemSetFunc = (id) => {
    // if we send the ID from BtnContainer
    /* const currentItem = jobsList.findIndex((job) => job.id === id);
    setCurrentItem(currentItem); */

    // if we send the index from BtnContainer
    setCurrentItem(id);
  };

  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobsList(jobs);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <section className="jobs-center">
        {isLoading ? (
          <div className="loading"></div>
        ) : (
          <>
            <BtnContainer
              currentItem={currentItem}
              jobsList={jobsList}
              currentItemSetFunc={currentItemSetFunc}
            />
            <Job jobsList={jobsList} currentJob={currentItem} />
          </>
        )}
      </section>
    </>
  );
};
export default App;
