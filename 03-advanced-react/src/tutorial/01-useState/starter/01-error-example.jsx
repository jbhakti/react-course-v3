const ErrorExample = () => {
  let count = 0;

  const increament = () => {
    count = count + 1;
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increament} className="btn">
        Increment
      </button>
    </>
  );
};

export default ErrorExample;
