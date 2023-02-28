import React from 'react';
import Header from '../components/Header';

//? Styles
import '@styles/RecoveryPassword.scss';
import logo from '@logos/logo_yard_sale.svg';

const RecoveryPassword = () => {
  return (
    <>
      <Header />
      <div className="PasswordRecovery">
        <div className="PasswordRecovery-container">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="title">Recuperación de Contraseña</h1>
          <p className="subtitle">Escribe la dirección de correo electrónico utilizada para crear su cuenta</p>
          <form action="/" className="form">
            <label htmlFor="email" className="label">Correo Electrónico</label>
            <input type="text" id="email" className="input input-email" />
            <input type="submit" value="Confirmar" className="primary-button login-button" />
          </form>
        </div>
      </div>
    </>
  )
}

export default RecoveryPassword