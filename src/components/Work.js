import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work Samples</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map(project => (
                <Card
                  key={project.id}
                  heading=
                  {project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  headingcol={project.headingcol}
                  btncolor={project.btncolor}
                  btntxt={project.btntxt}
                  txtcolor={project.txtcolor}
                  stack={project.stack}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
