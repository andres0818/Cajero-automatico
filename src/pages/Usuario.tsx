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
  const navigate = useNavigate()

  const retirarDinero = () => {


    while (retirar > 0 && retirar <= acomulado) {
      if (retirar >= 50 && cantidadBilletes.cincuenta) {
        setCantidadBilletes({
          ...cantidadBilletes,
          cincuenta: cantidadBilletes.cincuenta - 1,
        })
        setAcomulado(acomulado - 50)
      } else if (retirar >= 50 && cantidadBilletes.cincuenta) {
        setCantidadBilletes({
          ...cantidadBilletes,
          cincuenta: cantidadBilletes.cincuenta - 1,
        })
        setAcomulado(acomulado - 50)
      }
    }
    /* 
      while (retiro > 0) {
        if (retiro >= 100 && CIEN.numBilletesDeCien > 0) {
          retiroBilleteCien += 1;
          CIEN.numBilletesDeCien -= 1;
          retiro -= 100;
        } else if (retiro >= 50 && CINCUENTA.numBilletesDeCincuenta > 0) {
          retiroBilleteCincuenta += 1;
          CINCUENTA.numBilletesDeCincuenta -= 1;
          retiro -= 50;
        } else if (retiro >= 20 && VEINTE.numBilletesDeVeinte > 0) {
          retiroBilleteVeinte += 1;
          VEINTE.numBilletesDeVeinte -= 1;
          retiro -= 20;
        } else if (retiro >= 10 && DIEZ.numBilletesDeDiez > 0) {
          retiroBilleteDiez += 1;
          DIEZ.numBilletesDeDiez -= 1;
          retiro -= 10;
        } else if (retiro >= 5 && CINCO.numBilletesDeCinco > 0) {
          retiroBilleteCinco += 1;
          CINCO.numBilletesDeCinco -= 1;
          retiro -= 5;
        
    
    */


    console.log(cantidadBilletes);
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
      <button onClick={() => retirarDinero()} className='admin__saldo admin__recargar'>Retirar dinero</button>
      <button onClick={() => nuevoValor()} className='admin__saldo admin__reiniciar'>Ingresar otro valor</button>

    </div >
  )
}

export default Usuario