import React from 'react'



const Card = ({cep,logradouro,complemento,bairro,localidade,uf}) => {
  return (    
    <div>
       <h4>{cep}</h4>
       <br></br><h4> {logradouro} </h4> 
       <br></br><h4>{complemento}</h4>
       <br></br><h4>{bairro}</h4>
       <br></br><h4>{localidade}</h4>
       <br></br><h4>{uf}</h4> 
    </div>
  )
}

export default Card