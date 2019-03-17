import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class NavBar extends React.Component{
    render(){
        const { classes } = this.props;
        console.log(this.props);
        return (
          <div className={classes.root}>
          <AppBar color="primary" position="static">
            <Toolbar>
              <Toolbar>
                <Typography variant="headline" color="inherit">
                {this.props.title}
              </Typography>
              </Toolbar>
              {this.props.menus.map(a => (
                <Toolbar>
                  <Typography className={classes.title} variant="subtitle1" color="inherit" noWrap>
                    {a.menu}
                  </Typography>
                </Toolbar>
              ))}
                
                <Typography variant="h6" color="inherit" className={classes.grow}>
                </Typography>
                
                <Button color="inherit" >Login</Button>
            </Toolbar>
          </AppBar>
          </div>
        );
    }
}



export default withStyles(styles)(NavBar);