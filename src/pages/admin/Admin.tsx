import { useState } from 'react'
import './Admin.scss'

const Admin = () => {

  const [acomulado, setAcomulado] = useState<number>(0)
  const [cantidadBilletes, setCantidadBilletes] = useState<number[]>([0])

  const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const acomuladoSaldo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(10);

  }






  return (
    <div className='admin'>

      <div className='admin__container'>
        <h1 className='admin__tituloEstadoCajero'>Estado del cajero</h1>
        <p>Saldo {acomulado}</p>
        <form onSubmit={(e) => acomuladoSaldo(e)} >
          <div className='admin__containerBilletes'>
            <img className='admin__billete' src="https://www.eluniversal.com.co/sites/default/files/201612/anverso-billete-10-mil.jpg" alt="" />
            <input className='admin__inputBilletes' type="number" name="" id="" />
          </div>
          <div className='admin__containerBilletes'>
            <img className='admin__billete' src="https://s3.amazonaws.com/rtvc-assets-misenal.tv/ms-public/ms-editor/20mil.jpg" alt="" />
            <input className='admin__inputBilletes' type="number" name="" id="" />
          </div>
          <div className='admin__containerBilletes'>
            <img className='admin__billete' src="https://www.banrep.gov.co/billetes/50-mil/images/50000/anverso50000.png" alt="" />
            <input className='admin__inputBilletes' type="number" name="" id="" />
          </div>
          <button type='submit' className='admin__saldo admin__recargar'>Recargar saldo</button>
          <button className='admin__saldo admin__reiniciar'>Reiniciar saldo</button>
        </form>
      </div>

      <div className='admin__btnFunciones'>
      </div>

      <div className='admin__containerBotones'>
        {
          number.map((number: number, i: number) =>
            <button disabled className='admin__botones' value={number} key={i}>
              {number}
            </button>
          )
        }
      </div>
    </div >
  )
}

export default Admin