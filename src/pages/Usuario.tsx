import { useState } from "react"
import "./Usuario.scss"



interface Billetes {
  diez?: 0,
  veinte?: 0,
  cincuenta?: 0,
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


  const btnClick = (numero: number) => {
    const numeroNuevo = [...retirarJoin, numero];
    setRetirarJoin(numeroNuevo);

    setRetirar(numeroNuevo.join(''))
  }

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
    </div >
  )
}

export default Usuario