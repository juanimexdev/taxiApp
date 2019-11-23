import React from "react";
import arroyLeft from "../assets/images/arrow-left.png";
import("../assets/styles/containers/_signup.scss");
import user from "../assets/images/user.png";

const UserProfile = () => (
  <div className='signup'>
    <img src={arroyLeft} alt='Arrow left' className='signup__back' />
    <h2 className='signup__title'>User Profile</h2>
    <img src={user} alt='user' className='signup__img'/>
    <form>
      <input type='text' value='Juanita Gutierrez' />
      <input type='text' value='juaniyta_3w0@hotmail.com' />
      <input type='text' value='722-455-95-88' />
      <input type='password' placeholder='*******' />
    </form>
    <button>Update</button>
    
  </div>
);
export default UserProfile;
