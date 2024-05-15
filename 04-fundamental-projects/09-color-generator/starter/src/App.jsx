import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  // toast.error("Error");
  // toast.success("Success");

  const addColor = (selectedColor) => {
    try {
      const newColor = new Values(selectedColor).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
    // console.log(selectedColor);
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
