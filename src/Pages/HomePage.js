import React from "react";
import Particle from "../Components/Particles";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function HomePage() {
  return (
    <HomePageStyle>
   
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi I'm <span>Sourabh Bera</span>
        </h1>
        <Typewriter
          options={{
            autoStyle: true,
            loop: true,
            cursor: "|",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<span class='H1 role'>I am a <span class='role'>Web Developer</span></span>"
              )
              .pauseFor(1000)
              .deleteChars(7)
              .typeString("<span class='role'>Competitive Programmer</span>")
              .pauseFor(1000)
              .deleteChars(13)
              .typeString("<span class='role'>Student</span>")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
        <div className="icons">
          <a href="https://github.com/saurabhbera11" className="icon i-github">
            <GitHubIcon />
          </a>
          <a
            href="http://www.linkedin.com/in/sourabhbera11"
            className="icon i-linkdin"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyle>
  );
}

const HomePageStyle = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .H1 {
      color: var(--white-color) !important;
    }
    .role {
      font-size: 1.5rem;
    }
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        cursor: pointer;
        svg {
          margin: 0.3rem;
        }
      }
      .i-github {
        &:hover {
          color: grey;
          border: 2px solid grey;
        }
      }
    }
  }
`;

export default HomePage;
