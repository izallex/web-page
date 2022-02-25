// src/components/Navbar.js
import React from 'react';
import './NavbarComp.css';
import rightTag from './right_tag.svg';
import leftTag from './left_tag.svg';

class NavbarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {prevScrollpos: 0};

  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    
    this.setState({
      prevScrollpos: window.pageYOffset
    });
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

  handleScroll = (event) =>{
 
  var currentScrollPos = window.pageYOffset;

  if (this.state.prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }


    this.setState({
      prevScrollpos: currentScrollPos
    });
}


  render() {
    return (
      <div id='navbar'>
        <div id='navLinks'>
        <a id='Home' href="/web-design">Home</a>
        <a id='Projekte' href="/web-design/projects">Projekte</a>
        <a id='Kontakt' href="/web-design/contact">Kontakt</a>
        <a id='SEO' href="/web-design/seo">SEO</a>
        <a id='Hosting' href="/web-design/hosting">Hosting</a>
        </div>
        <div id='logo'>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1%' }}>
          <div>
            <img alt='' src={leftTag} />
          </div>
          <div >
            <h1 style={{ fontStyle: 'oblique', color: 'white', marginLeft: '4%' }} >Webdesign</h1>
          </div>
          <div >
            <img alt='' src={rightTag} />
          </div></div></div>
          <div id='myName' style={{ height: '50%',  fontStyle: 'oblique', color: 'white', marginTop: '1%' }}>
            by Alexandra Hirsch
          </div>
      </div>
    )
  }
}
export default NavbarComp;