import React from 'react'
import {useState} from 'react'
function Fetch(cep) {
    const [dados, setDados] = useState([])
        async function handleRequisicao() {
            const response = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
            const json = await response.json()
            setDados(json.result[0])
        }
        return dados 
    
}

export default Fetch