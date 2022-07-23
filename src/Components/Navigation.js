import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import avatar from "../img/avatar.jpg";
function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeClassName="active-class" exact>
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact Me
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>2022 Sourabh Bera Portfolio</p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 8px solid var(--border-color);;

  .avatar{
      width:90%;
      border-bottom:1px solid var(--border-color);
      text-align: center;
      img{
          width:100%;
          border-radius: 50%;
          border:8px solid var(--border-color);
      }
  }

  .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                text-transform: uppercase;
                letter-spacing:1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

  footer{
    border-top: 1px solid var(--border-color);
    p{
      padding: 2rem 0;
      font-size: 0.7rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
