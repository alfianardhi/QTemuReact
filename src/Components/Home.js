import React, { Component } from 'react';
import HeaderContent from './HeaderContent.js';
import MainContent from './MainContent.js';
import Meetups from './Meetups.js';
import Members from './Members.js';
import MainTitle from './MainTitle.js';
import MainTitleSee from './MainTitleSee.js';
import PastMeetups from './PastMeetups.js';
import Footer from './Footer.js';
import axios from 'axios';

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      nextmeetupTitle: 'Next Meetup',
      aboutmeetupTitle: 'About Meetup',
      membersTitle: 'Members',
      pastmeetupsTitle: 'Past Meetups',
      footertitle:'Copyright Hacktiv8 2018',
      headercontent: 
        {        
          location: 'Jakarta Indonesia',    
          members: '1,078',
          organizers: 'Ardhy Wiranata'      
        },
      maincontent:
        {       
          eventtitle: 'Awesome meetup and event',    
          dateevent: '25 Januari 2019',
          greating: 'Hello, Javascript & Node.js Ninjas!',
          content:'Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!. The meetup format will contain some short stories and trchnical tyalks. If you have a short announcement you\'d like to share with the audience, you may do so during open mic announcements.',
          notesevent:'Remember to bring a photo ID to get through building security.' ,
          diveevent:'-----',
          closing:'See You There!',
          team: 'Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers'     
        },
      meetups: [
        {        
          content: 'Come and meet other developers interested in Javascript and it\'s library in the Greater Jakarta area.',    
          socialmedia: 'Twitter',
          account: '@JakartaJS',
          hashtag:'#jakartajs'      
        },
      ],
      members:
        {        
          name: 'Adhy Wiranata',
          count:'4'      
        },
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
      peoples:[]
      ,         
    }
  }

  componentDidMount() {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        console.log('hasil HOME ------------- ', response.data);  
        let headercontent = Object.assign({}, this.state.headercontent);   
        headercontent.organizers = response.data.results[0].name;  
        
        let members = Object.assign({}, this.state.members);
        members.name = response.data.results[3].name;  

        let maincontent = Object.assign({}, this.state.maincontent);
        let arrayLength = 6;
        let nameTmp = ''; 
        for (var i = 0; i < arrayLength; i++) {
            nameTmp += response.data.results[i].name;
            if(i < arrayLength-1){
              nameTmp +=' ,';
            }else{
              nameTmp+=' The JakartaJS Organizers.';
            }
        }
        maincontent.team = nameTmp

        this.setState({
          headercontent,
          members,
          maincontent
        });
        //this.setState({ 
           //   peoples: response.data 
          //})
        });
  }

  render() {
    let { pastmeetups, headercontent, maincontent, nextmeetupTitle, aboutmeetupTitle, meetups, membersTitle, pastmeetupsTitle, members, footertitle, peoples } = this.state;
    return (
        <React.Fragment>
          <HeaderContent headercontent={headercontent}  />
          <MainTitle maintitle1={nextmeetupTitle}/>
          <MainContent maincontent={maincontent}/>
          <MainTitle maintitle1={aboutmeetupTitle}/>
          <Meetups meetups={meetups}/>
          <MainTitleSee maintitlesee1={membersTitle}/>
          <Members members={members}/>
          <MainTitleSee maintitlesee1={pastmeetupsTitle}/>
          <PastMeetups pastmeetups={pastmeetups}/>   
          <Footer footertitle={footertitle}/>     
        </React.Fragment>
    );
  }
}

export default Home;
