import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPages from "./pages/LandingPages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <LandingPages />
      <Footer />
    </>
  );
}

export default App;
