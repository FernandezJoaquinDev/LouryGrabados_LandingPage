import React from 'react';
import "../css/Carousel.css"; 
import vaso1 from "../assets/img/carousel/Vaso_carousel.jpg"
import vaso2 from "../assets/img/carousel/vaso_carousel2.jpg"
import vaso3 from "../assets/img/carousel/vaso_carousel3.jpg"


const Carousel = () => {

  return (
<div>

<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner container-carousel">
    <div className="carousel-item active">
      <img className="d-block w-100" src={vaso1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={vaso2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={vaso3} alt="Third slide"/>
    </div>
    <div className="overlay">
      <div className='h-100 d-flex align-items-center justify-content-center text-white p-3 flex-column'>
        <h3 className='text-center'>Grabados artesanales a pedido del cliente</h3>
        <button className='btn btn-outline-danger btn-lg'>Conoce Mas...</button>          
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Carousel