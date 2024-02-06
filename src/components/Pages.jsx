import { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../context";
import TaskBoard from "./TaskBoard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pages = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <main className={`w-full h-full relative ${dark ? "dark" : ""}`}>
      <Navbar />
      <TaskBoard />

      <ToastContainer theme="dark" position="top-right" />
    </main>
  );
};

export default Pages;
