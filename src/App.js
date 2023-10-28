import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
