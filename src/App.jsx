// import './App.css'

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import Body1 from "./components/Body/body1";
import Body2 from "./components/Body/body2";
import Body3 from "./components/Body/body3";

function App() {
  return (
    <>
      <Navbar />
      <Body1 />
      <Body2 />
      <Body3 />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
