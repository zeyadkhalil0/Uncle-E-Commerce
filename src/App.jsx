import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Offers from "./Pages/Offers";

const App = () => {
  return (
    <div className="">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Offers" element={<Offers />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
