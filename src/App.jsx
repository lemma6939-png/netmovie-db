import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import MovieCard from "./Components/MovieCard/MovieCard";
import { movies } from "./assets/Data/Data";
import DisplayRow from "./Components/DisplayRow/DisplayRow";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    
      <>
        <Header />
        <Banner />
        <DisplayRow />
        <Footer />

       
      </>
    
  );
}

export default App;
