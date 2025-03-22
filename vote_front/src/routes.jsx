import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Voter from "./pages/Voter";
import Candidate from "./pages/Candidate";
import Admin from "./pages/Admin";
import Results from "./pages/Results";
import About from "./Pages/about";
import Contact from "./Pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/voter" element={<Voter />} />
      <Route path="/candidate" element={<Candidate />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/results" element={<Results />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
