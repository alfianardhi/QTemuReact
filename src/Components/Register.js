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
    componentDidMount() {
        this.props.fetchDatas();
      }
    render(){
        const { classes, theme } = this.props;
        console.log(this.props, "propshallo=============================");
        //this.props.fetchDatas();
        //console.log("CEK 1---",test1);
        //console.log("CEK 2---",cekhasil.results[0].name);
  return (
    
    <div>
        <div> 
        <ul>
        {this.props.peoples.map(product =>
          <li key={product.height}>{product.name}</li>
        )}
      </ul>
            <h2>{this.props.titlecok}</h2>  
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
  counter: state.angka,
  titlecok:state.title,
  peoples:state.people
});

const mapDispatchToProps = ({  
    increment,  
    decrement,
    fetchDatas
})

//const integrateWithMaterialUI = withStyle(Register)

//export default connect(mapStateToProps,mapDispatchToProps)(integrateWithMaterialUI);

export default connect(mapStateToProps,mapDispatchToProps)(Register);
