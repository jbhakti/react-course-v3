const url = "https://www.course-api.com/react-tours-project";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const App = () => {
  const [toursInfo, setToursInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const updatedTours = toursInfo.filter((tour) => tour.id !== id);
    setToursInfo(updatedTours);
  };
  const fetchTours = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const tourDetails = await res.json();
      setToursInfo(tourDetails);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      {isLoading ? (
        <main>
          <Loading />
        </main>
      ) : (
        <main>
          {toursInfo.length === 0 ? (
            <div className="title">
              <h2>No Tours Left</h2>
              <button
                type="button"
                style={{ marginTop: "2rem" }}
                className="btn"
                onClick={() => fetchTours()}
              >
                Fetch Tours
              </button>
            </div>
          ) : (
            <Tours tourData={toursInfo} removeTourFunc={removeTour} />
          )}
          {/* <Tours tourData={toursInfo} removeTourFunc={removeTour} /> */}
        </main>
      )}
    </>
  );
};
export default App;
