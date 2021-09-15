import React, { useState,useEffect } from "react";
import { Route, Switch as Switching  } from 'react-router';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import AboutPage from './Pages/AboutPage';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import Projects from './Pages/Projects';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";

function App() {
  const [theme,setTheme]=useState('dark-theme');
  const [checked,setChecked] = useState(false);
  const [navToggle,setNavToggle]=useState(false);

  useEffect(() => {
    document.documentElement.className=theme;
  }, [theme])

  const themeToggler=()=>{
    if(theme==='light-theme'){
      setTheme('dark-theme');
      setChecked(false);
    }else{
      setTheme('light-theme');
      setChecked(true);
    }
  }

  return (
    <div className="app">
<Sidebar navToggle={navToggle} />
    <div className="theme">
          <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                <Switch
                  value=""
                  checked={checked}
                  inputProps={{ 'aria-label': '' }}
                  size="medium"
                  onClick={themeToggler}
                  
                />
              </div>
            </div>
        </div>

    <div className="ham-burger-menu">
    <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
    </div>

    <MainContentStyle>
    <div className="lines">
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
      <div className="line-4"></div>
    </div> 

    
      <Switching>
        <Route path='/' exact>
            <HomePage/>
        </Route>
        <Route path='/about' exact>
            <AboutPage/>
        </Route>
        <Route path='/projects' exact>
            <Projects/>
        </Route>
        <Route path='/contact' exact>
            <Contact/>
        </Route>
      </Switching>
    </MainContentStyle>
    </div>
  );
}

const MainContentStyle=styled.main`
position: relative;
margin-left: 13rem;
min-height: 100vh;
@media screen and (max-width:1200px){
    margin-left: 0;
  }
.lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }

`

export default App;
