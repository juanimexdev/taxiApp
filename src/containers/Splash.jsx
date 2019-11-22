import React from "react";
import('../assets/styles/containers/_splash.scss');
import icon from '../assets/images/icon.png';

const Splash = () => (
<div className='splash'>
    <div className='splash__icon'>
        <img src={icon} />
    </div>
    <div className='splash__form'>
        <p className='splash__title'>Taxi App</p>
        <p className='splash__welcome'>Welcome</p>
        <button className='--transparent'>Sign in</button>
        <button>Sign up</button>
    </div>
</div>
);

export default Splash;
