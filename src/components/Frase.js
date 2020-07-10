import React from 'react'
import styled from '@emotion/styled'

const ContenedorFrase=styled.div`
    border-radius:.10rem;
    background:#fff;
    max-width:800px;
    padding:3rem;

    @media (min-width:992px){
        margin-top:10rem;
    }

    h1{
        font-family:Arial, Helvetica, sans-serif;
        text-align:center;
        position:relative;
        padding-left:4rem;
        &::before{
            content:open-quote;
            font-size:10rem;
            color:#000;
            position:absolute;
            left:-1rem;
            top:-2rem;
        }
    }

    p{
        color:#666666;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-family:1.6rem;
        font-weight:bold;
        margin-top:2rem; 
        text-align:right;
    }
`

export const Frase = ({frase}) => {
    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>-{frase.author}</p>
        </ContenedorFrase>
    )
}
