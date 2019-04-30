import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import {increment, decrement, fetchDatas} from '../Redux/actions.js';
import { connect } from 'react-redux';



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

class Register extends React.Component{
    render(){
        const { classes, theme } = this.props;
        console.log(this.props, "=============================");
  return (
    
    <div>
        <div>    
          <h2>{this.props.counter}</h2>    
          <button onClick={() => this.props.increment()}>+</button>    
          <button onClick={() => this.props.decrement(10)}>-</button>
          <button onClick={() => this.props.fetchDatas()}>Fetch</button>
      </div>
    </div>  
    );
    }
}


const mapStateToProps = (state) => ({    
  counter: state.angka  
});

const mapDispatchToProps = ({  
    increment,  
    decrement,
    fetchDatas
})

//const integrateWithMaterialUI = withStyle(Register)

//export default connect(mapStateToProps,mapDispatchToProps)(integrateWithMaterialUI);

export default connect(mapStateToProps,mapDispatchToProps)(Register);