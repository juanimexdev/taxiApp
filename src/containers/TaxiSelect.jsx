import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import("../assets/styles/containers/_taxiselect.scss");
import travelImage from "../assets/images/pick-up-drop-off.png";
import arrowBack from "../assets/images/arrow-left.png";
import car from "../assets/images/car.png";
import car2 from "../assets/images/car2.png";
import car3 from "../assets/images/car3.png";
import car4 from "../assets/images/car4.png";
const TaxiSelect = () => (
  <Map
    className='home__map'
    google={google}
    zoom={16}
    initialCenter={{ lat: 19.2447786, lng: -99.7565247 }}
    fullscreenControl={false}
    mapTypeControl={false}
    zoomControl={false}
  >
    <Marker icon={car} position={{ lat: 19.2447786, lng: -99.7565247 }} />
    <Marker icon={car2} position={{ lat: 19.247499, lng: -99.75747 }} />
    <Marker icon={car3} position={{ lat: 19.245028, lng: -99.754036 }} />

    <div className='home__map-info'>
      <span className='home__map-title'>Choose a taxi</span>
      <img src={car4} alt='Car4' className='home__map-img'/>
      <div className='home__map-row'>
        <div className='home__map-item'>Price</div>
        <div className='home__map-item'>$120</div>
        <div className='home__map-item'>Distence</div>
        <div className='home__map-item'>5km</div>
      </div>
      <div className='home__map-row'>
        <div className='home__map-item'>Member</div>
        <div className='home__map-item'>1-4</div>
        <div className='home__map-item'>Time</div>
        <div className='home__map-item'>10min</div>
      </div>
      <button>Confirm</button>
    </div>
    <img src={arrowBack} alt='Arrow Back' className='home__map-back' />
  </Map>
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyAYV6wpQFvHhrKMH294QNDZC2rHKHKMW9U"
})(TaxiSelect);
