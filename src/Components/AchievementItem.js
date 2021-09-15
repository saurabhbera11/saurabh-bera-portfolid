import React from 'react'
import styled from 'styled-components'

function AchievementItem({image,text,link}) {
    return (
        <AchievementStyle>
            <a href={link} target="_blank" rel="noreferrer" className="card">
                <img src={image} alt="" />
                <p>{text}</p>
            </a>
        </AchievementStyle>
    )
}

const AchievementStyle=styled.div`
.card{
    display:flex;
    align-items:center;
    background-color: var(--background-dark-grey);
    margin: 0 .5rem;
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s ease-in-out;
    margin: 1rem;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
        color: var(--primary-color);
    }
    img{
        width:24vw;
        padding:1rem;
    }
    
}
`;
export default AchievementItem;
