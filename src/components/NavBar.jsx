import React from "react";
import { FaWineGlass } from "react-icons/fa";
// import { whatsappBtn } from "../js/botones.js";
import "../js/botones.js";
const NavBar = () => {
  const bot = () => (window.open("https://www.instagram.com/loury_grabados/"));
  function saludar() {
    function handleClick(e) {
      // e.preventDefault();
    }
    return alert("hola!");
  }
  return (
    <div className="fixed-top">
    <nav className="navbar navbar-dark bg-dark">
      <div className="justify-content-end d-flex">
        <a className="navbar-brand mx-3">
          {" "}
          <FaWineGlass />
          LouryGrabados
        </a>
      </div>
      <div className="d-flex ">
        <div className="dropdown show">
          <a
            className="btn btn-success dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Contacto
          </a>

          <div
            className="dropdown-menu bg-dark"
            aria-labelledby="dropdownMenuLink"
          >
            <div className="d-flex flex-column bg-dark">
              <button className="btn btn-success btn-lg" onClick={saludar}>
                Whatsapp
              </button>
              <button className="btn btn-warning btn-lg" onClick={bot}>Instagram</button>
              <button className="btn btn-primary btn-lg">Facebook</button>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-danger mx-3">
          Informacion
        </button>
      </div>
    </nav>
  </div>
);
};

export default NavBar;
