import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './Components/NavBar.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from './Components/Register.js';
import Home from './Components/Home.js';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: 'QTemu',
      menus: [
        {        
          id: '1',    
          pathlink:'createmeetup',
          menu: 'Create Meetup'    
        },
        {        
          id: '2',
          pathlink:'explore',    
          menu: 'Explore'    
        },
      ],        
    }
  }

  render() {
    let { title, menus } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
              <NavBar title={title} menus={menus}/>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/register" component={Register} />
              </Switch>  
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

/*this.propTypes = {
  store: PropTypes.object.isRequired
}*/

export default App;
