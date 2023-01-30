import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { app } from "../fb"
import "./Usuario.scss"



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

interface props {
  acomulado: number,
  setAcomulado: React.Dispatch<React.SetStateAction<number>>,
  cantidadBilletes: Billetes,
  setCantidadBilletes: React.Dispatch<React.SetStateAction<Billetes>>
}



const Usuario = ({ acomulado, cantidadBilletes, setAcomulado, setCantidadBilletes }: props) => {
  const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [retirar, setRetirar] = useState<number | string>(0)
  const [retirarJoin, setRetirarJoin] = useState<number[]>([])
  const [sinFondos, setSinFondos] = useState(false)
  const navigate = useNavigate()




  const retirarDinero = (dineroRetirado: number) => {


    const valor: number = typeof retirar === 'number' ? retirar : parseInt(retirar)
    const cincuenta: number = cantidadBilletes.cincuenta !== undefined ? cantidadBilletes.cincuenta : 0
    const veinte: number = cantidadBilletes.veinte !== undefined ? cantidadBilletes.veinte : 0
    const diez: number = cantidadBilletes.diez !== undefined ? cantidadBilletes.diez : 0

    const validarCantidad = () => acomulado > 0 ? setAcomulado(acomulado - valor) : setSinFondos(true);

    validarCantidad()

    setCantidadBilletes({
      diez: 0
    })


  }



  const btnClick = (numero: number) => {
    const numeroNuevo = [...retirarJoin, numero];
    setRetirarJoin(numeroNuevo);

    setRetirar(numeroNuevo.join(''))
  }

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const nuevoValor = () => {
    setRetirarJoin([])
    setRetirar(0)
  }

  const sinOut = () => {
    app.auth().signOut().then(() => {
      navigate('/')
    })

  }


  return (
    <>
      <div className='admin'>
        <div className='admin__container'>
          <h1 className="usuario__titulo">Saldo disponible: <span>{acomulado}</span></h1>

        </div>
        <div className='admin__btnFunciones'>
        </div>

        <form onSubmit={(e) => handlerSubmit(e)} className="usuario__form">
          <p className="usuario__valorRetirar">valor a retirar: <input onChange={e => setRetirar(e.target.value)} type="number" value={retirar} /></p>
          <div className='admin__containerBotones'>

            {
              number.map((number: number, i: number) =>
                <button onClick={() => btnClick(number)} className='admin__botones usuario__botones' value={number} key={i}>
                  {number}
                </button>
              )
            }

          </div>
        </form>
        <button className='admin__cerrarSesion' onClick={() => sinOut()}>Cerrar sesion</button>
        <button onClick={() => retirarDinero(acomulado)} className='admin__saldo admin__recargar'>Retirar dinero</button>
        <button onClick={() => nuevoValor()} className='admin__saldo admin__reiniciar'>Ingresar otro valor</button>
      </div >
      {
        sinFondos &&
        <div className='usuario__sinFondos'>
          <div className="usuario__sinFondosContainer">

            <h1 className="usuario__tituloSinfondos">Sin fondos</h1>
            <button onClick={() => setSinFondos(false)} className="usuario__sinFondosBtn">Retirar nuevamente</button>
          </div>
        </div>
      }
    </>
  )
}

export default Usuario