
import { useNavigate } from 'react-router-dom'
import { app } from '../../fb'
import './Admin.scss'




interface Billetes {
  diez?: number,
  veinte?: number,
  cincuenta?: number,
}



interface props {
  acomulado: number,
  setAcomulado: React.Dispatch<React.SetStateAction<number>>,
  cantidadBilletes: Billetes,
  setCantidadBilletes: React.Dispatch<React.SetStateAction<Billetes>>
}


const Admin = ({ acomulado, cantidadBilletes, setAcomulado, setCantidadBilletes }: props) => {


  const navigate = useNavigate()

  const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const acomuladoSaldo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const diez = cantidadBilletes.diez ? cantidadBilletes.diez * 10 : 0
    const veinte = cantidadBilletes.veinte ? cantidadBilletes.veinte * 20 : 0
    const cincuenta = cantidadBilletes.cincuenta ? cantidadBilletes.cincuenta * 50 : 0

    setAcomulado(diez + veinte + cincuenta)

  }

  const reiniciarSaldo = () => {
    setAcomulado(0)
    setCantidadBilletes({
      diez: 0,
      veinte: 0,
      cincuenta: 0,
    })
  }


  const handlesChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const name = e.target.name
    const value = e.target.value
    setCantidadBilletes({
      ...cantidadBilletes,
      [name]: value,
    })

  }


  const sinOut = () => {
    app.auth().signOut().then(() => {
      navigate('/')
    })

  }


  return (
    <div className='admin'>

      <div className='admin__container'>
        <h1 className='admin__tituloEstadoCajero'>Estado del cajero</h1>
        <p>Saldo: {acomulado}</p>
        <form onSubmit={(e) => acomuladoSaldo(e)} >
          <div className='admin__containerBilletes'>
            <img className='admin__billete' src="https://www.eluniversal.com.co/sites/default/files/201612/anverso-billete-10-mil.jpg" alt="" />
            <input onChange={(e) => handlesChange(e)} className='admin__inputBilletes' type="number" name="diez" id="" value={cantidadBilletes.diez}/>
          </div>
          <div className='admin__containerBilletes'>
            <img className='admin__billete' src="https://s3.amazonaws.com/rtvc-assets-misenal.tv/ms-public/ms-editor/20mil.jpg" alt="" />
            <input onChange={(e) => handlesChange(e)} className='admin__inputBilletes' type="number" name="veinte" id="" value={cantidadBilletes.veinte}/>
          </div>
          <div className='admin__containerBilletes'>
            <img className='admin__billete' src="https://www.banrep.gov.co/billetes/50-mil/images/50000/anverso50000.png" alt="" />
            <input onChange={(e) => handlesChange(e)} className='admin__inputBilletes' type="number" name="cincuenta" id="" value={cantidadBilletes.cincuenta}/>
          </div>
          <button type='submit' className='admin__saldo admin__recargar'>Actualizar saldo</button>
          <button onClick={()=>reiniciarSaldo()} className='admin__saldo admin__reiniciar'>Reiniciar saldo</button>
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
      <button className='admin__cerrarSesion' onClick={() => sinOut()}>Cerrar sesion</button>
    </div >
  )
}

export default Admin