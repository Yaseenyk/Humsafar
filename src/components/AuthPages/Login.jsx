import { useState } from "react";
import './Login.scss';
import Logo from '../../assets/wedding-couple.png';
import { FaInstagram, FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value)

  }
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value)

  }
  const handleButton = () => {
    console.log(email)
    console.log(password)
  }
  return (
    <>
      <div className="LoginMain">
        <div className="LoginInner">
          <div className="LogoMain">
            <img src={Logo} />
            <p>Humsafar</p>
          </div>
          <div className="loginMainInput">
            <input className="LoginInput" type="email" onChange={handleEmail} placeholder="Enter Your Email" />
            <input type="password" className="LoginInputPass" onChange={handlePassword} placeholder="Enter Your Password" />
          </div>
          <button onClick={handleButton} className="LoginBtn">Login</button>
          <div className="Line"></div>
          <div className="SocialLoginButtons">
            <button className="SocialLoginBtn gmail">
              <FaGoogle /> Login with Gmail
            </button>
            <button className="SocialLoginBtn facebook">
              <FaFacebookF /> Login with Facebook
            </button>
            <button className="SocialLoginBtn instagram">
              <FaInstagram /> Login with Instagram
            </button>
          </div>
          <div className="Line"></div>
          <div className="SocialIcons">
            <div className="Copyright">© 2024 Humsafar. All rights reserved.</div>
            <div className="favicons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login;
