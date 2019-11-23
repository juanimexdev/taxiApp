import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import("../assets/styles/containers/_requesttrip.scss");
import arrowBack from "../assets/images/arrow-left.png";
import car from "../assets/images/car.png";
import trip from "../assets/images/trip.png";
import location from "../assets/images/location.png";
import route from "../assets/images/route.png";
const RequestTrip = () => (
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
    <Marker icon={route} position={{ lat: 19.247499, lng: -99.75747 }} />

    <div className='home__map-info'>
      <img src={trip} alt='Car4' className='home__map-img'/>
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
      <button>Cancel</button>
    </div>
    <img src={arrowBack} alt='Arrow Back' className='home__map-back' />
  </Map>
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyAYV6wpQFvHhrKMH294QNDZC2rHKHKMW9U"
})(RequestTrip);
