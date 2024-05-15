import React from "react";
import Tour from "./Tour";

const Tours = ({ tourData, removeTourFunc }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      {/* {tourData.length === 0 ? (
        <main>
          <div className="title">No Tours Left</div>
          <button
            type="button"
            style={{ marginTop: "2rem", marginInline: "auto" }}
            className="btn"
          >
            Fetch Tours
          </button>
        </main>
      ) : (
        <div className="title">
          <h2>our tours</h2>
          <div className="title-underline"></div>
        </div>
      )} */}
      <div className="tours">
        {tourData.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTourFunc} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
