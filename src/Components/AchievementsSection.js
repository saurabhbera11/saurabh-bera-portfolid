import React from 'react'
import styled from 'styled-components'
import{InnerLayout} from '../Styles/Layouts'
import Title from './Title'
import GFG from '../img/GFG.png'
import AchievementItem from './AchievementItem'
import Codechef from '../img/Codechef.png'
import LEETCODE from '../img/LEETCODE.png'
function AchievementsSection() {
    return (
        <InnerLayout>          
        <AchievementsStyled>
            <Title title='Profile Links' span='Profile Links'/>
            <InnerLayout>
                <AchievementItem image={Codechef} text='5 Star Coder on Codechef' link='https://www.codechef.com/users/spartan_11'/>
                <AchievementItem image={GFG} text='Solved 375+ problems on Geeks For Geeks and also having 4rd rank on the College Leader Board' link='https://auth.geeksforgeeks.org/user/saurabbera/profile'/>
                <AchievementItem image={LEETCODE} text='1793 Rating on Leetcode which comes under Top 7% among all leetcode users' link='https://leetcode.com/spartan_11/'/>
            </InnerLayout>
        </AchievementsStyled>
        </InnerLayout>
    )
}

const AchievementsStyled=styled.section`


`;

export default AchievementsSection
