import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import avatar from "../images/avatar.png"
import { Typewriter } from 'react-typewriting-effect'
import Fab from '@material-ui/core/Fab';

import githubIcon from "../images/github.svg"
import linkedinIcon from "../images/linkedin1.png"
import twitterIcon from "../images/twitter1.png"
import devpostIcon from "../images/devpost.png"
import fbIcon from "../images/fb1.png"
import instaIcon from "../images/instagram.svg"

import 'react-typewriting-effect/dist/index.css'


const Header = () => {
  return (
    
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
            <h1>
              Hi, I'm <Typewriter string={data.name}  delay={80} loop="True"></Typewriter>{" "}
              <span>
                <img src={avatar} style={{height:60, width: 60, borderRadius: 60}} alt="avatar"></img>
              </span>
            </h1>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h2>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h2>
              <h2>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h2>
              <h2>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h2>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "susiejojo1@gmail.com"
              }`}
              className="primary-btn"
            >
              REACH OUT TO ME!
            </a>
          </Fade>
          
        </div>

      </div>
      <div style={{position: "fixed", display: "flex", flexDirection: "column", zIndex: 20}}>
     <Fab style={{zIndex: 20, positon: "fixed", backgroundColor: "white", float: "bottom"}}>
     <a href="https://github.com/susiejojo" class="button">
     <img src={githubIcon} style={{height:40, width: 40}} alt="git"></img>
       </a>
      </Fab>
      <br></br>
      <Fab style={{zIndex: 20, positon: "fixed", backgroundColor: "white"}}>
      <a href="https://twitter.com/DipanwitaGuhat1" class="button">
     <img src={twitterIcon} style={{height:40, width: 40}} alt="tweet"></img>
       </a>
      </Fab>
      <br></br>
      <Fab style={{zIndex: 20, positon: "fixed", backgroundColor: "white"}}>
      <a href="https://www.linkedin.com/in/dipanwita-guhathakurta-408ab1178/" class="button">
     <img src={linkedinIcon} style={{height:40, width: 40}} alt="linkedin"></img>
       </a>
      </Fab>
      <br></br>
      <Fab style={{zIndex: 20 , positon: "fixed", backgroundColor: "white"}}>
      <a href="https://devpost.com/susiejojo" class="button">
     <img src={devpostIcon} style={{height:40, width: 40}} alt="devpost"></img>
       </a>
      </Fab>
      <br></br>
      <Fab style={{zIndex: 20 , positon: "fixed", backgroundColor: "white"}}>
      <a href="https://www.facebook.com/dipanwita.guhathakurta.33" class="button">
     <img src={fbIcon} style={{height:40, width: 40}} alt="fb"></img>
       </a>
      </Fab>
      <br></br>
      <Fab style={{zIndex: 20 , positon: "fixed", backgroundColor: "white"}}>
      <a href="https://www.instagram.com/diya_susiejojo/" class="button">
     <img src={instaIcon} style={{height:40, width: 40}} alt="insta"></img>
       </a>
      </Fab>
      </div>
    </div>
  )
}

export default Header
