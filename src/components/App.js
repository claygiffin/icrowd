import React from 'react';
import Helmet from 'react-helmet';

import Hero from './Hero';

import siteLogo from '../assets/icrowd_logo_knockout.svg';
import siteLogoNoTag from '../assets/icrowd_logo_knockout_no_tag.svg';
import advisoryIcon from '../assets/Advisory_Services_Icon.svg';
import healthIcon from '../assets/Health_Safety_Icon.svg';
import eventIcon from '../assets/Event_Support_Icon.svg';
import NYC_Marathon from '../assets/NYC_Marathon.png';
import Tough_Mudder from '../assets/Tough_Mudder.png';
import David_Blaine from '../assets/David_Blaine.png';
import Virgin_Sport from '../assets/Virgin_Sport.png';
import Americas_Cup from '../assets/Americas_Cup.png';
import heroMp4 from '../assets/icrowd-background.mp4';
import heroWebM from '../assets/icrowd-background.webm';

export default class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Helmet title="icrowd" />
        <Hero videoMp4={heroMp4} videoWebM={heroWebM} >
          <div className="site-logo">
            <img src={siteLogo} alt="ICROWD Intelligent Crowd Solutions" />
          </div>
          <div className="text" >
            <h2>On the ground, under control.</h2>
            <p className="lede">We transform unpredictable events into well-managed experiences  through planning, technology, and innovative thinking.</p>
          </div>
        </Hero>
        <section id="services">
          <div className="service">
            <div className="icon-wrap"><img className="icon" src={advisoryIcon} alt="Advisory Services Icon" /></div>
            <div className="text" >
              <h3>Advisory Services</h3>
              <p>Our advisory services offer an independent voice and expert team to help you evaluate risks, identify process improvement opportunities, and plan for your future growth. Whether you engage us for an audit or to provide expert counsel, we work with you to achieve your goals.</p> 
            </div>
          </div>
          <div className="service">
            <div className="icon-wrap"><img className="icon" src={healthIcon} alt="Health &amp; Safety Icon" /></div>
            <div className="text" >
              <h3>Health &amp; Safety</h3>
              <p>Our health and safety management services deliver scalable turnkey solutions to address your event needs. Every location and activity generate a specific risk profile and unique requirements for the orderly movement and assembly of people during both routine and emergency conditions.</p>
            </div>
          </div>
          <div className="service" >
            <div className="icon-wrap"><img className="icon" src={eventIcon} alt="Advisory Services Icon" /></div>
            <div className="text" >
              <h3>Event Support</h3>
              <p>Our support services allow us to offer our clients fully integrated turnkey solutions to meet their crowd management needs. Employing our enterprise crowd safety management framework, we can provide holistic, end-to-end planning that leverages our deep sector knowledge.</p>
            </div>
          </div>
        </section>
        <section id="clients" >
          <h2>Our Clients</h2>
          <p className="lede">We have built our success by improving and managing crowd safety for world-class mass-participation events. Today, we work globally with gatherings of all sizes to ensure that attendees, organizers, and municipalities have a safe and secure experience.</p>
          <div className="client-list" >
            <div className="client-logo" > <img alt="New York City Marathon" src={NYC_Marathon} /></div>
            <div className="client-logo" > <img alt="Tough Mudder" src={Tough_Mudder} /></div>
            <div className="client-logo" > <img alt="Virgin Sport" src={Virgin_Sport} /></div>
            <div className="client-logo" > <img alt="America's Cup" src={Americas_Cup} /></div>
            <div className="client-logo" > <img alt="David Blaine" src={David_Blaine} /></div>
          </div>
        </section>
        <section id="contact" >
          <h2>Work With Us</h2>
          <p className="lede" >If you’re ready to talk or have a question, <a href="mailto:johndoe@example.com" target="_blank" rel="noopener noreferrer">contact us</a> now.</p>
        </section>
        <footer>
          <div className="site-logo" >
            <img src={siteLogoNoTag} alt="icrowd: Intelligent Crowd Solutions" />
          </div>
          <h6><span>336 West 37th Street, Suite 400</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>New York, NY 10018</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span>(212) 401-4000</span></h6>
        </footer>
      </div>
    )
  }
}