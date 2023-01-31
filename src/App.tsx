import { Route, Routes } from 'react-router-dom'
import Admin from './pages/admin/Admin'
import Login from './pages/Login/Login '
import Usuario from './pages/Usuario'
import './App.scss'
import { useEffect, useState } from 'react'
import { app } from './fb'



interface Billetes {
  diez?: number,
  veinte?: number,
  cincuenta?: number,
}

const INITIAL_STATE: Billetes = {
  diez: 0,
  veinte: 0,
  cincuenta: 0,
}

const App = () => {

  const [acomulado, setAcomulado] = useState<number>(0)
  const [cantidadBilletes, setCantidadBilletes] = useState(INITIAL_STATE)

  const [usuario, setUsuario] = useState<string | null | undefined>()
  const [loadingUser, setLoadingUser] = useState<boolean>()


  const usuarioLogin = () => {

    app.auth().onAuthStateChanged((status) => {
      setUsuario(status ? status.email : null);
      setLoadingUser(false);

    });
  }

  useEffect(() => {
    setLoadingUser(true);
    usuarioLogin()

  }, [])




  return (
    <Routes>
      <Route path='/cajero-automatico' element={
        <Login />} />
      <Route path='/admin' element={<Admin
        acomulado={acomulado} setAcomulado={setAcomulado} usuario={usuario}
        cantidadBilletes={cantidadBilletes} setCantidadBilletes={setCantidadBilletes}
      />}
      />
      <Route path='/usuario' element={
        <Usuario
          acomulado={acomulado} setAcomulado={setAcomulado} usuario={usuario}
          cantidadBilletes={cantidadBilletes} setCantidadBilletes={setCantidadBilletes}
        />}
      />
      <Route path='*' element={<Login />} />
    </Routes>
  )
}

export default App