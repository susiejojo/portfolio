import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink, btncolor, btntxt, txtcolor, headingcol }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
        opacity: 0.8,
      }}
    >
      <div className="content">
        <h2 className="header" style={{color: headingcol}}>{heading}</h2>
        <p className="text" style={{fontSize: 15, color: txtcolor}}><b>{paragraph}</b></p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{backgroundColor: btncolor, color: btntxt}}
        >
          Explore
        </a>
      </div>
    </div>
  )
}

export default Card
