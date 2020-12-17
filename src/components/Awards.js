import React from "react"
import Fade from "react-reveal/Fade"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import award1 from "../images/award1.jpg";
import mars from '../images/mars.png';
import ntse from '../images/ntse.png';
import ecell from '../images/ecell.png';
import kvpy from '../images/kvpy.png';

const Awards = () => {
  return (
    <div className="section" id="achievements">
      <div className="container">
        <div className="about-section">
        <div className="content">
            <Fade top cascade>
              <h1>Achievements</h1>
            
        <List>
        <ListItem>
            <ListItemAvatar>
            <Avatar>
            <img src={award1} style={{height:40, width: 40}} alt="dl"></img>
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Dean's List Award, IIIT-H" secondary="Top 5% of the batch in 2018,2019" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <Avatar>
            <img src={mars} style={{height:40, width: 40}} alt="mars"></img>
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Overall first in Microsoft Engage 2020" secondary="For Mars Colonisation Proogramme, July 2020" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <Avatar>
            <img src={ecell} style={{height:40, width: 40}} alt="ecell"></img>
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="First runners-up for Qualcomm in Megathon 2019" secondary="Hackathon held at IIIT-H, Sept 2019" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <Avatar>
            <img src={kvpy} style={{height:40, width: 40}} alt="kvpy"></img>
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Kishore Vaigyanik Protsahan Yojana(KVPY) Scholar" secondary="IISc Bangalore, 2017" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <Avatar>
            <img src={ntse} style={{height:40, width: 40}} alt="nts"></img>
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="National Talent Search Examination Scholar" secondary="Awarded by NCERT, 2016" />
        </ListItem>
        </List>
        </Fade>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Awards
