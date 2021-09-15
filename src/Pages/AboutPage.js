import React from 'react'
import styled from 'styled-components'
import AchievementsSection from '../Components/AchievementsSection';
import ImageSection from '../Components/ImageSection';
import Technologies from '../Components/Technologies';
import Title from '../Components/Title';
import {MainLayout} from '../Styles/Layouts'


function AboutPage() {
    return (
        
            <MainLayout>
                <AboutStyled>
                    <Title title={'About Me'} span={'About Me'}></Title>
                    <ImageSection></ImageSection>
                    <Technologies/>
                    <AchievementsSection/>
                </AboutStyled>
            </MainLayout>
        
    )
}

const AboutStyled=styled.section`

`;

export default AboutPage
