import React from "react"
import Fade from "react-reveal/Fade"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>Education</h1>
            </Fade>
            <Grid container spacing={3}>
              <Grid item xs>
              <Card style={{width: "50vh", height: "45vh"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="270vh"
                  width = "80vh"
                  image="data:image/jpeg;base64,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"
                  title="IIIT Hyderabad"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  B.Tech + MS in Electronics and Communication Engineering
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <b>2018-2023</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs>
            <Card style={{width: "50vh", height: "45vh"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="MLH"
                height="270vh"
                width = "80vh"
                image = "https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg"
                title="MLH"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 Explorer Fellow Fall '20
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Oct-Dec 2020</b>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
          <Grid item xs>
            <Card style={{width: "50vh", height: "45vh"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="School"
                height="270vh"
                width = "80vh"
                image = "https://i.postimg.cc/Hswysxg4/54859220fddc828b.jpg"
                title="South Point High School"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 WBBSE X, CBSE XII
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>2003-2018</b>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
