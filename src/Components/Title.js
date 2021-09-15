import React from 'react'
import styled from "styled-components"
function Title({title,span}) {
    return (
        <TitleStyle>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyle>
    )
}

const TitleStyle = styled.div`
position: relative;
h2{
    color:var(--white-color);
    font-size: 3.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom:.7rem;
    @media screen and (max-width: 370px){
            font-size: 2rem;
        }
    &::before {
        content:"";
        position: absolute;
        bottom: 0;
        width: 7.5rem;
        height:.33rem;
        background-color:var(--background-light-color-2);
        border-radius: 15px;
        left: 0;
    }
    &::after {
        content:"";
        position: absolute;
        bottom: 0;
        width: 3.5rem;
        height:.33rem;
        background-color:var(--primary-color);
        border-radius: 15px;
        left:0;
    }
    span{
        font-weight: 900;
        color:var(--span-color);
        font-size:5rem;
        position: absolute;
        left: 0;
        top:30%;
        z-index:-1;
        @media screen and (max-width: 620px){
                font-size: 4rem;
            }
            @media screen and (max-width: 496px){
                font-size: 3rem;
            }
            @media screen and (max-width: 370px){
                font-size: 2rem;
            }
    }
}
`;

export default Title
