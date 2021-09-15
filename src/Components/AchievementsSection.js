import React from 'react'
import styled from 'styled-components'
import{InnerLayout} from '../Styles/Layouts'
import Title from './Title'
import GFG from '../img/GFG.png'
import AchievementItem from './AchievementItem'
import Codechef from '../img/Codechef.png'
function AchievementsSection() {
    return (
        <InnerLayout>          
        <AchievementsStyled>
            <Title title='Achievements' span='Achievements'/>
            <InnerLayout>
                <AchievementItem image={Codechef} text='4 Star Coder on Codechef' link='https://www.codechef.com/users/spartan_11'/>
                <AchievementItem image={GFG} text='Solved 200+ problems on Geeks For Geeks and also having 4rd rank on the College Leader Board' link='https://auth.geeksforgeeks.org/user/saurabbera/profile'/>
            </InnerLayout>
        </AchievementsStyled>
        </InnerLayout>
    )
}

const AchievementsStyled=styled.section`


`;

export default AchievementsSection
