import { useState } from "react";

const ToggleChallenge = () => {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShowComponent(!showComponent)}>
        Click To Toggle
      </button>
      {showComponent && <Component />}
      {/* {showComponent ? <Component /> : <></>} */}
    </>
  );
};

const Component = () => {
  return <div>This component is being toggled</div>;
};

export default ToggleChallenge;
