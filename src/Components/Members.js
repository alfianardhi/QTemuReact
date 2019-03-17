import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


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
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

class Members extends React.Component{
    render(){
        const { classes, theme } = this.props;

  return (
    <div className={classes.mainStyle}>
  <Grid container spacing={16}>
    <Grid item>
      <Avatar alt="Remy Sharp" src="https://hacktiv8.com/img/fox.png__vzu2vhp2VRX%2Bewg7J0bPlaAa9e377ae39495073d0e66db163fc8d9b" className={classes.bigAvatar} />
    </Grid>
    <Grid item xs={12} sm container>
      <Grid item xs container direction="column" spacing={16}>
        <Grid item xs>
          <Typography  gutterBottom variant="subtitle1">
            Organizers
          </Typography>        
          <Grid container >
            <Grid item xs={3}>
              <Typography gutterBottom variant="body2">
                {this.props.members[0].name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
            <Typography gutterBottom variant="body2">
              {this.props.members[0].count} Others.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    </Grid>
  </Grid>
</div>
    );
    }
}

export default withStyles(styles, { withTheme: true })(Members);
