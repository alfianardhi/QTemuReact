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
    paddingLeft: theme.spacing.unit * 1,
    marginTop: 25,
    maxWidth: '100%',
  },
});

class MainTitleSee extends React.Component{
    render(){
        const { classes, theme } = this.props;

  return (
<div className={classes.root}>
<div className={classes.mainStyle}>
  <Grid container spacing={16}>
    <Grid item xs={12} sm container>
      <Grid item xs container direction="column" spacing={16}>
        <Grid item xs>
          <Typography component="h6" variant="h6">
            {this.props.maintitlesee1}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
      <Typography style={{ cursor: 'pointer' }}>See all</Typography>
      </Grid>
    </Grid>
  </Grid>
</div>
</div>
    );
    }
}

export default withStyles(styles, { withTheme: true })(MainTitleSee);
