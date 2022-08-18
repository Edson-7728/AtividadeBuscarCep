import React from 'react'
import {useState} from 'react'

const BuscaCep = () => {
    const [cep, setCep] = useState()
    async function handleRequisicao() {
        const response = await fetch ('https://viacep.com.br/ws/01001000/json/')
    }
  return (

    <div>

    </div>
  )
}

export default BuscaCep