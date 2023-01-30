import React, { useState } from 'react'
import { app } from '../../fb'
import { cajero, admin, usuario } from './img'
import { useNavigate } from 'react-router-dom'

import './Login.scss'

interface InicioSesion {
  name: string;
  status: boolean;
}


const Login: Function = () => {

  const [modal, setModal] = useState<boolean>(false)
  const [tipoUsuario, setTipoUsuario] = useState<InicioSesion["name"]>('')
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()


  const loginAdmin: Function = (name: string) => {
    setModal(true);
    setTipoUsuario(name);
  }

  const loginUsuario: Function = (name: string) => {
    setModal(true);
    setTipoUsuario(name);
  }


  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    app.auth().signInWithEmailAndPassword(user.email, user.password).then(() => {
      navigate(`/${tipoUsuario}`)
    })

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
              <form className='login__form' onSubmit={(e) => handlerSubmit(e)} >
                <input onChange={(e) => setUser({ ...user, email: e.target.value })} className='login__email' type="email" name="email" id="email" placeholder='email' value={user.email} />
                <input onChange={(e) => setUser({ ...user, password: e.target.value })} className='login__password' type="password" name="password" id="password" placeholder='password' value={user.password} />
                <div className='login__containerBtn'>
                  <button className='login__submit' type="submit"><span className='login__textSubmitBtn'>Log in</span></button>
                  <button className='login__back' onClick={() => setModal(false)} type="button"><span className='login__textBackBtn'>Back</span></button>
                </div>

              </form>
            </div>
            <p style={{ position: 'absolute', top: '10%' }}>{
              tipoUsuario === 'Admin' ?
                <>Email: adminCajero@correo.com  <br />
                  Password: 123456</>
                :
                <>Email: usuarioCajero@correo.com  <br />
                  Password: 654321</>
            }</p>
          </div>
        </div>

      }
    </>
  )
}

export default Login 