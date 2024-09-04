import React from "react";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import { detallesCard } from "./data/datosCard.js";
import Card from "./components/Card.jsx";
import "./App.css";
import Gallery from "./components/Gallery.jsx";
import "./css/Gallery.css";

const App = () => {
  return (
    <div id="fondo">
      <NavBar />
      <Carousel />
      <div className="container">
        <div className="row my-5">
          {detallesCard.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
        <div></div>
      </div>
      <h1 className="titulo p-3 mb-2 bg-danger">Diseños</h1>
      <div className="container">
        <div className="row">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default App;
