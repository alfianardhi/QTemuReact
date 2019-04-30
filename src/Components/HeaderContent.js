import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 5,
    maxWidth: '100%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class HeaderContent extends React.Component{
    render(){
        const { classes, headercontent, theme } = this.props;
  return (
<div className={classes.root}>
<Paper className={classes.paper}>
  <Grid container spacing={16}>
    <Grid item>
      <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="https://hacktiv8.com/img/fox.png__vzu2vhp2VRX%2Bewg7J0bPlaAa9e377ae39495073d0e66db163fc8d9b" />
      </ButtonBase>
    </Grid>
    <Grid item xs={12} sm container>
      <Grid item xs container direction="column" spacing={16}>
        <Typography gutterBottom component="h6" variant="h6">
            Hacktive8 Meetup
        </Typography>
        
        <Grid container spacing={5}>
        <Grid item xs={6} sm={1}>
          <Typography gutterBottom color="textSecondary">
            Location  
          </Typography>
        </Grid>
        <Grid item xs={6} sm={11}>
          <Typography gutterBottom color="textSecondary">
            {headercontent.location}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={1}>
          <Typography gutterBottom color="textSecondary">
            Members 
          </Typography>
        </Grid>
        <Grid item xs={6} sm={11}>
          <Typography gutterBottom color="textSecondary">
            {headercontent.members}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={1}>
          <Typography gutterBottom color="textSecondary">
            Organizers
          </Typography>
        </Grid>
        <Grid item xs={6} sm={11}>
          <Typography gutterBottom color="textSecondary">
            {headercontent.organizers}
          </Typography>
        </Grid>
      </Grid>
        <Grid container spacing={5}>
          <Button variant="contained" color="primary" className={classes.button}>
            Join Us
        </Button>
        </Grid>
      </Grid>
      
    </Grid>
  </Grid>
</Paper>
</div>
    );
    }
}

export default withStyles(styles, { withTheme: true })(HeaderContent);
