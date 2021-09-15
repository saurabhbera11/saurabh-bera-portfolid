import React from 'react'
import styled from 'styled-components'

function TechnologyCard({image,title,paragraph}) {
    return (
        <TechnologyCardStyle>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </TechnologyCardStyle>
    )
}


const TechnologyCardStyle=styled.div`
    background-color: var(--background-dark-grey);
    margin: 0 .5rem;
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
    }
.container{
    padding:1.5rem;
    h4{
        padding: 0.3rem 0;
        font-size:1rem;
        color: var(--white-color);
    }
    p{
        font-size:0.8rem !important;
    }
    img{
        width:5vw;
        
    }
}
`;
export default TechnologyCard
