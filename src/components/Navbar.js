import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Dipanwita
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}><b>Work</b></button>
            <button onClick={() => scrollTo("#about")}><b>Education</b></button>
            <button onClick={() => scrollTo("#experience")}><b>Experience</b></button>
            <button onClick={() => scrollTo("#achievements")}><b>Achievements</b></button>
            <button onClick={() => scrollTo("#contact")}><b>Contact</b></button>
            <button onClick={() => window.location.href="https://drive.google.com/file/d/1KBX8fg3YoH7mwUu2uzPMOrtmUhjvgDMT/view?usp=sharing"}><b>Resume</b></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
