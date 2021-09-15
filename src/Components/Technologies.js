import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from "../Styles/Layouts"
import Title from './Title'
import TechnologyCard from './TechnologiesCard'
import webdev from '../img/webdev.png'
import machinelearning from '../img/machinelearning.png'
import algorithm from '../img/algorithm.png'

function Technologies() {
    return (
            <InnerLayout>
                <TechnologiesStyled>
                    <Title title={'Technologies'} span={'Technologies'}></Title>
                    <div className="technologies">
                        <TechnologyCard 
                        image={webdev} 
                        title='Web Development' 
                        paragraph={'Creating Responsive websites using tools like: Html,CSS,JavaScript,Node.js,React,Material UI and much more'}/>
                        <TechnologyCard 
                        image={machinelearning} 
                        title='Machine Learning' 
                        paragraph={'Training/Testing machine learning and deep learning models using Python.'}/>
                        <TechnologyCard 
                        image={algorithm}  
                        title='Data Structures and Algorithm' 
                        paragraph={'Having a good understanding of data structures and algorithms that can be applied to real world applications.'}/>
                        
                    </div>
                </TechnologiesStyled>
            </InnerLayout>
    )
}

const TechnologiesStyled=styled.section`
.technologies{
    margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(1, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
}
`

export default Technologies
