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
  mainStyle: {
    paddingRight: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    marginBottom: 5,
    maxWidth: '100%',
  },
});

class Meetups extends React.Component{
    render(){
        const { classes, theme } = this.props;

  return (
    
    <div className={classes.mainStyle}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography variant="body2">
                {this.props.meetups[0].content} 
              </Typography>
             <Typography variant="body2" gutterBottom>
             {this.props.meetups[0].socialmedia}: {this.props.meetups[0].account} and we use the hashtag {this.props.meetups[0].hashtag}
             </Typography>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </div>  
    );
    }
}

export default withStyles(styles, { withTheme: true })(Meetups);
