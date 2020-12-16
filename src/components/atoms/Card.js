import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  stkbutton: {
      borderRadius: "1vw",
      backgroundColor: "red",
      color: "white",
      width: "100px",
      fontSize: 15,
      position: "relative",
      fontFamily: 'Arial',
      left: 5,
      top: -95,
      bottom: 0,
      "&:hover": {
        backgroundColor: "red"
    }  
  }
});

const Card = ({ heading, paragraph, imgUrl, projectLink, btncolor, btntxt, txtcolor, headingcol, stack }) => {
  const classes = useStyles();
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
        opacity: 0.8,
        fontFamily: 'Arial'
      }}
    >
      <button className={classes.stkbutton}><b>{stack[0]}</b></button>
      <button className={classes.stkbutton}><b>{stack[1]}</b></button>
      <div className="content">
        <h2 className="header" style={{color: headingcol, paddingTop: 0, fontFamily: 'Arial'}}>{heading}</h2>
        <p className="text" style={{fontFamily: 'Times New Roman', fontSize: 15, color: txtcolor}}><b>{paragraph}</b></p>
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
