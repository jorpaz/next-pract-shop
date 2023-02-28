import React, {useRef, useState } from "react";
import Header from "../components/Header";

//? Styles
import "@styles/Login.scss";
import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
  
  const form = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <Header />
      <div className="Login">
        <div className="Login-container">
          <img src={logo} alt="logo" className="logo" />
          <form action="/" className="form" ref={form}>
            <label htmlFor="email" className="label">
              Correo Electronico
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              />
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="primary-button login-button">
              INGRESAR
            </button>
            <a href="/recovery-password">¿Olvidaste tu Contraseña?</a>
          </form>
            <button
              className="secondary-button signup-button"
              onClick={handleSubmit}>
              CREAR CUENTA
            </button>
        </div>
      </div>
    </>
  );
};

export default Login;
