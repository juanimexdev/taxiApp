import React from 'react';
import arroyLeft from '../assets/images/arrow-left.png';
import('../assets/styles/containers/_login.scss');

const Login = () =>(
<div className='login'>
    <img src={arroyLeft} alt="Arrow left" className='login__back'/>
    <h2 className='login__title'>Login</h2>
    <form>
        <input type="text" placeholder='juanimexdev@gmail.com'/>
        <input type="password" placeholder='******'/>
    </form>
    <button>Sing In</button>
    <p className='login__social-title'>login with</p>
    <div className='login__social-networks'>
        <div className='login__network login__network--facebook'>
            F
        </div>
        <div className='login__network login__network--google'>
            G
        </div>
        <div className='login__network login__network--twitter'>
            T
        </div>
    </div>
</div>
);

export default Login;