import { useState } from 'react'
import './Admin.scss'

const Admin = () => {

  const [acomulado, setAcomulado] = useState<number>(0)
  const [cantidadBilletes, setCantidadBilletes] = useState()

  const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const acomuladoSaldo = (e: number) => setAcomulado(acomulado + e)

  const valueBilletes = (cantidad: number) => {
  }

  return (
    <div className='admin'>
      <div className='admin__container'>
        <h1>Estado del cajero</h1>
        <h3>Saldo: {acomulado}</h3>
      </div>
      <div className='admin__btnFunciones'>
        <button className='admin__saldo admin__reiniciar'>Reiniciar saldo</button>
        <button className='admin__saldo admin__recargar'>Recargar saldo</button>
      </div>
      <div className='admin__containerBotones'>
        {
          number.map((number: number, i: number) =>
            <button className='admin__botones' value={number} key={i}>
              {number}
            </button>
          )
        }
      </div>
    </div >
  )
}

export default Admin