'use client';
import { useState } from 'react';
import axios from 'axios'

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const validatePassword = () => {
    if (password.length < 6 || password.length > 20) {
      setError('Şifre 6-20 karakter arasında olmalıdır.');
    } else if (!/^[a-zA-Z0-9]+$/.test(password)) {
      setError('Şifre alfanumerik olmalıdır.');
    } else {
      setError('');
    }
  };

  const handleLogin = async() => {
    try {
      const result = await axios.post('https://assign-api.piton.com.tr/api/rest/login', {
        email,
        password,
      });
      result.status===200 ? alert("Giriş başarılı!"):alert("Giriş başarısız!")
     
    } catch (error) {
      alert("Giriş başarısız!")
    }
  };

  return (
    <div className="main-container">
      <div className="welcome-img">
        <img style={{ objectFit: "fill", width: "-webkit-fill-available", height: "-webkit-fill-available" }} alt="left-image" src="../Picture.png" />
      </div>
      <div className="form-container">
        <div className="logo"><img src="../Logo.png" alt="logo" /></div>
        <div className="welcome-section">
          <p>Welcome back!</p>
          <span>Login to your account</span>
        </div>
        <div className="input-section">
          <div className="email-input">
            <p>E-mail</p>
            <input
              type="text"
              name="email"
              placeholder="john@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-input">
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember-me">
            <input
              type="checkbox"
              name="check"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </div>
        </div>
        <div className="button-container">
          <button className="login-btn" onClick={handleLogin}>Login</button>
          <button className="register-btn">Register</button>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </div>
  );
};

export default Home;
