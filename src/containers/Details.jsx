import React from "react";
import details from "../assets/images/details.png";
import arrowBack from "../assets/images/arrow-left.png";

import("../assets/styles/containers/_details.scss");
const Details = () => (
  <>
    <h2>Detalles</h2>
    <img src={details} alt='Details' className='details' />
    <img src={arrowBack} alt='Arrow Back' className='home__map-back' />
  </>
);

export default Details;
