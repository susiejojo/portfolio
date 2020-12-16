import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import avatar from "../images/avatar.png"
import { Typewriter } from 'react-typewriting-effect'
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
      
    </div>
  )
}

export default Header
