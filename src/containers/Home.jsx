import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import("../assets/styles/containers/_home.scss");
import travelImage from "../assets/images/pick-up-drop-off.png";
import arrowBack from '../assets/images/arrow-left.png';
const Home = () => (
  <Map
    className='home__map'
    google={google}
    zoom={16}
    initialCenter={{ lat: 19.2447786, lng: -99.7565247 }}
    fullscreenControl={false}
    mapTypeControl={false}
  >
    <div className='home__map-info'>
      <div className='home__map-image'>
        <img src={travelImage} alt='Travel' />
      </div>
      <div className='home__map-form'>
        <label htmlFor=''>Pick up</label>
        <input type='text' value='My current location' />
        <label htmlFor=''>Drop-off</label>
        <input type='text' value='3040 Our Way, Lincon Us' />
      </div>
    </div>
    <img src={arrowBack} alt="Arrow Back" className='home__map-back'/>
  </Map>
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyAYV6wpQFvHhrKMH294QNDZC2rHKHKMW9U"
})(Home);
