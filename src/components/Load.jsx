import React from 'react'
import Loading from '../assets/svg/load.svg'

//Svg que aparece ao carregar pagina
const Load = () => {
  return (
    <div>
        <img src={Loading} alt="loading" />
    </div>
  )
}

export default Load