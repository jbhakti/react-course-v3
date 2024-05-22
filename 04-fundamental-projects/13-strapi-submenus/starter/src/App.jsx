import { useContext } from "react";
import { StrapiContext } from "./context";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

const App = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } =
    useContext(StrapiContext);
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
