import { createContext, useState, useContext } from "react";

export const StrapiContext = createContext();

export const StrapiProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageID] = useState(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <StrapiContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageID }}
    >
      {children}
    </StrapiContext.Provider>
  );
};
