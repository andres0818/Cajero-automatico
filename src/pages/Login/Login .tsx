import React, { useState } from 'react'
import { app } from '../../fb'
import { cajero, admin,usuario } from './img'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import './Login.scss'

const Login: Function = () => {

  const [modal,setModal] =useState<boolean>(false)

  const navigate: NavigateFunction = useNavigate()

  const loginAdmin: Function = () => {

  }

  return (
    <div className='login'>
      <img className='login__cajero' src={cajero} alt="" />
      <img onClick={() => loginAdmin()} className='login__admin' src={admin} alt="" />
      <img onClick={() => loginAdmin()} className='login__usuario' src={usuario} alt="" />
      <h2 className='login__titulo'>Bienvenido</h2>
      <h3 className='login__subtitulo'>Inicie sesion</h3>
    </div>
  )
}

export default Login 