import React from "react";
import "./App.css";

import Header from "./sections/header/Header";
import Shortener from "./sections/shortener/Shortener";
import Statistics from "./sections/statistics/Statistics";
import Boost from "./sections/boost/Boost";
import Footer from "./sections/footer/Footer";
import Hero from "./sections/hero/Hero";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Shortener />
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
