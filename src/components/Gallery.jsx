import React from "react";
import vasoG1 from "../assets/img/gallery/vaso4.jpg";
import vasoG2 from "../assets/img/gallery/vaso6.jpeg";
import vasoG3 from "../assets/img/gallery/vaso10.jpeg";
import vasoG4 from "../assets/img/gallery/vaso13.jpeg";
import vasoG5 from "../assets/img/gallery/vaso24.jpeg";
import vasoG6 from "../assets/img/gallery/vaso25.jpeg";
import vasoG7 from "../assets/img/gallery/vaso14.jpeg";
import vasoG8 from "../assets/img/gallery/vaso1.jpeg";
import vasoG9 from "../assets/img/gallery/vaso9.jpeg";
import "../css/Gallery.css";
const Gallery = () => {
  const conjuntoImg = [
    vasoG1,
    vasoG2,
    vasoG3,
    vasoG4,
    vasoG5,
    vasoG6,
    vasoG7,
    vasoG8,
    vasoG9,
  ];

  return (
    <div>
      <div className="containerImg">
        {conjuntoImg.map((item, index) => (
          <div className="contenedorImagenes" key={index}>
            <p>
              {" "}
              <img
                src={item}
                alt="ImagenGaleria"
                className="grilla"
                // key={index}
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
