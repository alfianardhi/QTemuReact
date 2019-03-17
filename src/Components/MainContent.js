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

class MainContent extends React.Component{
    render(){
        const { classes, theme } = this.props;

  return (
    <div className={classes.mainStyle}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {this.props.maincontent[0].title}
              </Typography>
              <Typography gutterBottom color="textSecondary">
                {this.props.maincontent[0].dateevent}
              </Typography>
              <Typography variant="body2">
                {this.props.maincontent[0].greating}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {this.props.maincontent[0].content}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {this.props.maincontent[0].notesevent}
             </Typography>
             <Typography variant="body2" gutterBottom>
                {this.props.maincontent[0].diveevent}
             </Typography>
             <Typography variant="body2" gutterBottom>
                {this.props.maincontent[0].closing}
             </Typography>
             <Typography variant="body2" gutterBottom>
                {this.props.maincontent[0].team}
             </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>  
    );
    }
}

export default withStyles(styles, { withTheme: true })(MainContent);
