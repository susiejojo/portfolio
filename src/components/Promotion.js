import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import BuildIcon from '@material-ui/icons/Build';
import msIcon from '../images/ms.png';
import robotIcon from '../images/bot.png';
import healthIcon from "../images/health.png"
import plantIcon from '../images/plant.png';
import osdgIcon from '../images/osdg.png';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Promotion = () => {
  const classes = useStyles();
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <p> 
          <Timeline align="alternate" style={{height: "120vh"}}>
            
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            June-Sept 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator style={{height: "20vh"}}>
          <TimelineDot>
          <img src={plantIcon} style={{height:20, width: 20}} alt="plant"></img>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h3">
              Deep Learning Intern
            </Typography>
            <Typography>Neem Tree Agro Solns Pvt. Ltd.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Aug-Nov 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator style={{height: "20vh"}}>
          <TimelineDot color="primary">
            <ImportContactsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h3">
              Teaching Assistant
            </Typography>
            <Typography>Probabiility and Random Processes, Monsoon '20 IIIT-H</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            May 2020-
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator style={{height: "20vh"}}>
          <TimelineDot color="primary" variant="outlined">
            <BuildIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} >
            <Typography variant="h6" component="h3">
              Teaching and Software Coordinator
            </Typography>
            <Typography>Electronics and Robotics Club, IIIT-H</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            May-July 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator style={{height: "20vh"}}>
          <TimelineDot color="primary"  variant="outlined">
          <img src={msIcon} style={{height:20, width: 20}} alt="ms"></img>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h3">
            Microsoft Codess Mentee
            </Typography>
            <Typography>Microsoft India</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            April 2020-
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator style={{height: "20vh"}}>
          <TimelineDot color="secondary" variant="outlined">
          <img src={robotIcon} style={{height:20, width: 20}} alt="boto"></img>
          </TimelineDot>
          <TimelineConnector />
          </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h3">
              Undergraduate Student Researcher
            </Typography>
            <Typography>Robotics Research Lab, IIIT-H</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            May - Aug 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator style={{height: "20vh"}}>
          <TimelineDot color="secondary" variant="contained">
          <img src={osdgIcon} style={{height:20, width: 20}} alt="boto"></img>
          </TimelineDot>
          <TimelineConnector />
          </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h3">
              Student Mentor
            </Typography>
            <Typography>Open Source Development Group, IIIT-H</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            May 2019-July 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator style={{height: "0vh"}}>
          <TimelineDot color="secondary" variant="outlined">
          <img src={healthIcon} style={{height:20, width: 20}} alt="boto"></img>
          </TimelineDot>
          <TimelineConnector />
          </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h3">
              Python Developer
            </Typography>
            <Typography>Soujhe Innovative Healthcares Devices Pvt. Ltd.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
          </p>
          </Fade>
      </div>
    </div>
    </div>
  )
}

export default Promotion
