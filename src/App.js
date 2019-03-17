import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js';
import HeaderContent from './Components/HeaderContent.js';
import MainContent from './Components/MainContent.js';
import Meetups from './Components/Meetups.js';
import Members from './Components/Members.js';
import MainTitle from './Components/MainTitle.js';
import MainTitleSee from './Components/MainTitleSee.js';
import PastMeetups from './Components/PastMeetups.js';
import Footer from './Components/Footer.js';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: 'QTemu',
      maintitle1: 'Next Meetup',
      maintitle2: 'About Meetup',
      maintitlesee1: 'Members',
      maintitlesee2: 'Past Meetups',
      footertitle:'Copyright Hacktiv8 2018',
      menus: [
        {        
          id: '1',    
          menu: 'Create Meetup'    
        },
        {        
          id: '2',    
          menu: 'Explore'    
        },
      ],
      headercontent: [
        {        
          location: 'Jakarta Indonesia',    
          members: '1,078',
          organizers: 'Ardhy Wiranata'      
        },
      ],
      maincontent: [
        {        
          title: 'Awesome meetup and event',    
          dateevent: '25 Januari 2019',
          greating: 'Hello, Javascript & Node.js Ninjas!',
          content:'Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!. The meetup format will contain some short stories and trchnical tyalks. If you have a short announcement you\'d like to share with the audience, you may do so during open mic announcements.',
          notesevent:'Remember to bring a photo ID to get through building security.' ,
          diveevent:'-----',
          closing:'See You There!',
          team: 'Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers'     
        },
      ],
      meetups: [
        {        
          content: 'Come and meet other developers interested in Javascript and it\'s library in the Greater Jakarta area.',    
          socialmedia: 'Twitter',
          account: '@JakartaJS',
          hashtag:'#jakartajs'      
        },
      ],
      members: [
        {        
          name: 'Adhy Wiranata',
          count:'4'      
        },
      ],
      pastmeetups: [
        {        
          id: '#39',
          eventdate: '27 November 2017',    
          company: 'kumparan',
          count: '139'      
        },
        {        
          id: '#38',
          eventdate: '27 October 2017',    
          company: 'BliBli',
          count: '113'       
        }
        ,
        {        
          id: '#37',
          eventdate: '27 September 2017',    
          company: 'Hacktiv8',
          count: '110'        
        }
      ],         
    }
  }

  render() {
    let { title, pastmeetups, headercontent, maincontent, maintitle1, maintitle2, meetups, maintitlesee1, maintitlesee2, members, footertitle, menus } = this.state;
    return (
      <React.Fragment>
        
        
        <NavBar title={title} menus={menus}/>
        <HeaderContent headercontent={headercontent}  />
        <MainTitle maintitle1={maintitle1}/>
        <MainContent maincontent={maincontent}/>
        <MainTitle maintitle1={maintitle2}/>
        <Meetups meetups={meetups}/>
        <MainTitleSee maintitlesee1={maintitlesee1}/>
        <Members members={members}/>
        <MainTitleSee maintitlesee1={maintitlesee2}/>
        <PastMeetups pastmeetups={pastmeetups}/>   
        <Footer footertitle={footertitle}/>     
      </React.Fragment>
    );
  }
}

export default App;
