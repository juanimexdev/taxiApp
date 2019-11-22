import React from "react";
import arroyLeft from "../assets/images/arrow-left.png";
import("../assets/styles/containers/_signup.scss");

const SignUp = () => (
  <div className='signup'>
    <img src={arroyLeft} alt='Arrow left' className='signup__back' />
    <h2 className='signup__title'>Sign Up</h2>
    <h3 className='signup__subtitle'>
      Register via your email to connect with the people.
    </h3>
    <form>
      <input type='text' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <input type='password' placeholder='Confirm Password' />
    </form>
    <button>Sing Up</button>
    <p className='signup__social-title'>Already have an account? <span className='signup__login'>Login</span></p>
  </div>
);
export default SignUp;
