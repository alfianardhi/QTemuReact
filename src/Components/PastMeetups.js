import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  mainStyle: {
    paddingRight: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    marginBottom: 5,
    maxWidth: '100%',
  },
});

class PastMeetups extends React.Component{
    render(){
      const { classes, theme} = this.props;
      console.log("props----------",this.props.posts);
    
  return (

    
    <div className={classes.mainStyle}>
       <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={40} justify="center">
        {this.props.pastmeetups.map(pastmeetup => (
          <Grid item key={pastmeetup.id}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="subtitle1">
                    {pastmeetup.eventdate}
                  </Typography>
                  <Divider />
                  <Typography gutterBottom component="p">
                    {pastmeetup.id} JakartaJS April Meetup with
                  </Typography>
                  <Typography  gutterBottom component="p">{pastmeetup.company}</Typography>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom color="textSecondary">
                    {pastmeetup.count}  Went
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" variant="contained" className={classes.button}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    </div>
    );
    }
}

export default withStyles(styles, { withTheme: true })(PastMeetups);
