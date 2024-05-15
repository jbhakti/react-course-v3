import { useState, createContext, useContext } from "react";

const GlobalContext = createContext();

export const useGlobalContextHook = () => useContext(GlobalContext);

// const AppContenxt = ({children}) => {
const AppContenxt = (props) => {
  const [name, setName] = useState("Pradeep");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {/* {children} */}
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContenxt;
