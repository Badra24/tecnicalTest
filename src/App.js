import { React } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./asset/style.css";
import Navbar from "./componen/NAVBAR/NavbarAuth";
import HomePage from "./pages/Dashboard";
import NotFoundPage from "./pages/Notfoundpage";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
