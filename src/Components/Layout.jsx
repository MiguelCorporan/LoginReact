import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "../Pages/DashBoard";
import Seccion from "./Seccion";
const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Seccion />} />
        <Route path="/:name/" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};

export default Layout;
