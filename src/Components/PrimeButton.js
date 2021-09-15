import React from 'react'
import styled from 'styled-components'

function PrimaButton({title}) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled=styled.a`
    background-color: var(--primary-color);
    padding:.8rem 1.5rem;
    color:white;
    cursor:pointer;
    display: inline-block;
    font-size:inherit;
    text-transform:uppercase;
    position: relative;
    font-size: 0.5;
    transition:all .4s ease-in-out;
    &::after{
        content:"";
        left:0;
        bottom: 0;
        width:100%;
        height:.4rem;
        content:"";
        position: absolute;
        transition:all .3s ease-in-out;
    }
    &:hover::after{
       
       
        background-color:var(--white-color);
        
    }
`

export default PrimaButton
