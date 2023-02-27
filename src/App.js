import React, { useContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { darkModeContext } from "./context/darkModeContext";

import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import New from './pages/New/New';
import Single from './pages/Single/Single';

import './Styles/dark.scss';

function App() {

  const {darkmode} = useContext(darkModeContext)
  
  return (
    <div className={darkmode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/add" element={<New />} />
          <Route path="/profile" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
