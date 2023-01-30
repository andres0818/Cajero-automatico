import React, { useState } from 'react'
import { app } from '../../fb'
import { cajero, admin, usuario } from './img'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import './Login.scss'

interface InicioSesion {
  name: string;
  email: string;
  password: string;
  status: boolean;
}


const Login: Function = () => {

  const [modal, setModal] = useState<boolean>(true)
  const [tipoUsuario, setTipoUsuario] = useState<InicioSesion["name"]>('')

 

  const loginAdmin: Function = (name: string) => {
    setModal(true);
    setTipoUsuario(name);
  }

  const loginUsuario: Function = (name: string) => {
    setModal(true);
    setTipoUsuario(name);
  }



  return (
    <>
      <div className='login'>
        <img className='login__cajero' src={cajero} alt="" />
        <img onClick={() => loginAdmin('Admin')} className='login__admin' src={admin} alt="" />
        <img onClick={() => loginUsuario('Usuario')} className='login__usuario' src={usuario} alt="" />
        <h2 className='login__titulo'>Welcome</h2>
        <h3 className='login__subtitulo'>Log in</h3>
      </div>
      {
        modal &&
        <div className='login__modal'>
          <div className="login__borderEffects">
            <div className="login__modalContainer">
              <h1 className='login__tituloModal'>Welcome {tipoUsuario}</h1>
              <form className='login__form' onSubmit={() => setModal(false)} >
                <input className='login__email' type="email" name="email" id="email" placeholder='email' />
                <input className='login__password' type="password" name="password" id="password" placeholder='password' />
                <div className='login__containerBtn'>
                  <button className='login__submit' type="submit">Log in</button>
                  <button className='login__back' onClick={() => setModal(false)} type="button">Back</button>
                </div>

              </form>
            </div>
          </div>
        </div>

      }
    </>
  )
}

export default Login 