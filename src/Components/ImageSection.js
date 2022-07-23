import React from 'react'
import styled from 'styled-components'
import profile from '../img/profile.jpg'
// import PrimeButton from './PrimeButton'


function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={profile} alt="" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Sourabh Bera</span></h4>
                </div>
                <p className="paragraph">
                I am a coding enthusiast with strong knowledge of Data Structures and Algorithms, Skilled in Java, C/C++, Python, JavaScript, also having experience in Front End Web Development using React.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p> 
                        <p>Nationality</p> 
                        <p>Languages</p> 
                        <p>Location</p>  
                    </div>
                    <div className="info">
                        <p>: Sourabh Bera</p>
                        <p>: 20</p> 
                        <p>: Indian</p> 
                        <p>: Hindi,English,Bengali,Marathi</p> 
                        <p>: Mumbai,Maharshtra</p>  
                    </div>
                </div>
                {/* <PrimeButton title={"Download Resume"} /> */}
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled=styled.div`
margin-top: 3rem;
display: flex;
@media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
.left-content{
    width: 100%;
    img{
        width:90%;
        height:100%;
        object-fit: cover;
    }
}
.right-content{
    
    h4{
        font-size:2rem;
        color:var(--white-color);
        span{
            font-size:2rem;
        }
    }
    .paragraph{
        padding:1rem 0;
    }
    .about-info{
        padding-bottom: 1.4rem;
        display: flex;
        .info-title{
            padding-right: 3rem;
            p{
                font-weight: 600;
            }
        }
        .info-title, .info{
            p{
                padding: .3rem 0;
            }
        }
    }
}
`;

export default ImageSection
