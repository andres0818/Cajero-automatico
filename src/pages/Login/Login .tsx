import React from 'react'
import { cajero, google } from './img'
import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
      <img className='login__cajero' src={cajero} alt="" />
      <img className='login__google' src={google} alt="" />
      <h2 className='login__titulo'>Bienvenido</h2>
      <h3 className='login__subtitulo'>Inicie sesion</h3>
    </div>
  )
}

export default Login 