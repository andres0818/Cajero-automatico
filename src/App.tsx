import { Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'
import Login from './pages/Login/Login '
import Usuario from './pages/Usuario'
import './App.scss'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/usuario' element={<Usuario/>}/>
      <Route path='*' element={<Login/>}/>
    </Routes>
  )
}

export default App