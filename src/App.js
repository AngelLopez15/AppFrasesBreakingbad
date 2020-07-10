import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import { Frase } from './components/Frase';

// useEffect es como el document ready o el DOM counted loader

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top:3rem;
  padding: 1rem 3rem;
  font-size:2rem;
  border:2px solid black;
  transition: background-size .8s ease;
  :hover{
    cursor:pointer;
    background-size:400px;
  }
`
const Contenedor=styled.div`
  display:flex;
  align-items:center;
  padding-top:5rem;
  flex-direction:column;
`
    // ejemplo de peticion con la pokeAPI
    // const api= await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    // const poke= await api.json()
    // console.log(poke)

function App() {
  // state
  const [frase, setFrase] = useState({})

  const consultarApi= async()=>{
    // Ocupando fetch  para hacer la peticion a la API
    // fetch funciona con promesas
    // ocupamos async y await para evitar el doble then de las promesas
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes') 
    const frase = await api.json()
    setFrase(frase[0])
  }

  // Cargar la orimer frase automaticamente
  useEffect(()=>{
    consultarApi()
  },[])

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consultarApi}
      >
        Obtener frase
      </Boton> 
    </Contenedor>
  );
}

export default App;
