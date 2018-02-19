import React from 'react';
import FontAwesome from 'react-fontawesome';
import ieee from './img/IEEELogo.png';
import ieeeExplore from './img/IEEEEXPLORELogo.png';
import ieeeSpectrum from './img/IEEESPECTRUMLogo.png';
import {Link} from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import './../style/footer.css';

class SocialLinks extends React.Component {
  render () {
    return (
      <FontAwesome
        className="social-icon"
        name={this.props.name}
        size={this.props.size} />
    )
  }
}

class Logo extends React.Component {
  render() {
    return (
      <img src={this.props.source} alt={this.props.alt} />
    )
  }
}

class MenuBar extends React.Component {
  render () {
    return (
      <span>{this.props.item}</span>
    )
  }
}

class Copyright extends React.Component {
  render () {
    return (
      <p className="copyright">© Copyright 2018 IEEE ATEITH Student Branch - All Rights Reserved</p>
    )
  }
}

export default class Footer extends React.Component{
  render() {
    return (
      <div className="footer">
        <div className="bottom-nav">
            <Link to="/">
              <MenuBar item="Home" />
            </Link>
            <Link to="/about">
              <MenuBar item="About" />
            </Link>
            <Link to="/blog">
              <MenuBar item="Blog" />
            </Link>
            <Link to="/events">
              <MenuBar item="Events" />
            </Link>
            <Link to="/contact">
              <MenuBar item="Contact" />
            </Link>
        </div>
        <div>
        <a href="https://www.facebook.com/ieeeteithe/" target="_blank" rel="noopener noreferrer">
          <SocialLinks name="facebook-square" size="2x"/>
        </a>
        <a href="https://twitter.com/ieeeteithe" target="_blank" rel="noopener noreferrer">
          <SocialLinks name="twitter-square" size="2x"/>
        </a>
        <a href="https://instagram.com/ieeeteithe/" target="_blank" rel="noopener noreferrer">
          <SocialLinks name="instagram" size="2x"/>
        </a>
        <a href="https://www.youtube.com/channel/UCmzjQYFb33sHrWKVWv-VW0A" target="_blank" rel="noopener noreferrer">
          <SocialLinks name="youtube" size="2x"/>
        </a>
        </div>
        <div className="logos">
          <a href="http://www.ieee.org/index.html" target="_blank" rel="noopener noreferrer">
            <Logo source={ieee} alt="IEEE Logo"/>
          </a>
          <a href="http://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noopener noreferrer">
            <Logo source={ieeeExplore} alt="IEEE Explore Logo"/>
          </a>
          <a href="http://spectrum.ieee.org/" target="_blank" rel="noopener noreferrer">
            <Logo source={ieeeSpectrum} alt="IEEE Spectrum Logo"/>
          </a>
        </div>
        <Copyright />
      </div>
    )
  }
}
