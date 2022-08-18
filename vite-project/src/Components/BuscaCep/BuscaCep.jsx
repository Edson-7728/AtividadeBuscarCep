import React from 'react'
import {useState} from 'react'
import Fetch from '../../Fetch/Fetch'
import Button from '../Button/Button'
import Card from '../Card/Card'

const BuscaCep = () => {
    const [cep, setCep] = useState("")
     function handleRequisicao() {
       setDados(Fetch(cep)) 
    }
    const [dados, setDados] = useState([])
     
  return (

    <div>
    <input type= "text" placeholder='cep' onChange={(e)=> {setCep (e.target.value)}} value={cep}></input>
    <Button onClick={handleRequisicao} texto ="Busca Cep" />
    {dados.map((dados,index)=>{
      return <Card key={index} cep={dados.cep} logradouro={dados.logradouro} complemento={dados.complemento} bairro={dados.bairro} localidade= {dados.localidade} uf={dados.uf} />
    })}
    </div>
  )
}

export default BuscaCep