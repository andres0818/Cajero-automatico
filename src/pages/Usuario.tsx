

const Usuario = () => {
  const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]




  return (
    <div className='admin'>
      <div className='admin__container'>

      </div>


      <div className='admin__btnFunciones'>
      </div>

      <div className='admin__containerBotones'>
        {
          number.map((number: number, i: number) =>
            <button  className='admin__botones' value={number} key={i}>
              {number}
            </button>
          )
        }
      </div>
    </div >
  )
}

export default Usuario