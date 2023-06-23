// import './App.css'

import Navbar from "./components/Navbar/Navbar";
import Section3 from "./components/Section3/Section3";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Section3 />} />
      </Routes>
    </>
  );
}

export default App;
