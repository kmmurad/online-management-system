import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AppRoutes from "./routes"; // Assuming you have a routes.jsx file

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
