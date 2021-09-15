import React from 'react'
import { useState } from 'react'
import Title from '../Components/Title'
import {MainLayout,InnerLayout} from '../Styles/Layouts'
import projects from '../Data/projects'
import Menu from '../Components/Menu'
import Button from '../Components/Button'

const allButtons = ['All',...new Set(projects.map(item=>item.category))]

function Projects() {
    const [menuItem,setMenuItems]=useState(projects);
    // const [button,setButton]=useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(projects);
            return;
        }

        const filteredData = projects.filter(item => item.category === button);
        setMenuItems(filteredData);
    }

    return (
        <MainLayout>
            <Title title={"Projects"} span={'Projects'}/>
                <InnerLayout>
                    <Button filter={filter} button={allButtons}/>
                    <Menu menuItem={menuItem}/>
                </InnerLayout>
        </MainLayout>
    )
}

export default Projects;
