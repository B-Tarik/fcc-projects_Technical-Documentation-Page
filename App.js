import React, { Component } from "react";
import TopBar from "./topBar";
import NavBar from "./navBar";
import Main from "./mainContent";

import './app.scss';

class App extends Component {
  state = {
    showMenu : false,
  }

  DOMElms = {
    hamburger  : React.createRef(),
    lineOne    : React.createRef(),
    lineTwo    : React.createRef(),
    lineThree  : React.createRef()
  }

  animations = {
    toggleMenu : new TimelineMax({paused:true, reversed:true})
  }

  componentDidMount() {
    const {hamburger, lineOne, lineTwo, lineThree} = this.DOMElms
    const {toggleMenu} = this.animations;

    toggleMenu 
      .to(lineTwo.current, .125, {transformOrigin: "50% 50%", scaleX: 0})
      .to(lineOne.current, .250, {transformOrigin: "50% 50%", y: 8, ease: Power2.easeInOut}, "slide")
      .to(lineThree.current, .250, {transformOrigin: "50% 50%", y: -8, ease: Power2.easeInOut}, "slide")
      .to(hamburger.current, .3, {rotation: 90, ease: Power4.easeInOut}, "spin")
      .to(lineOne.current, .250, {rotation: 45, ease: Power4.easeInOut}, "cross")
      .to(lineThree.current, .250, {rotation: -45, ease: Power4.easeInOut}, "cross");

    hamburger.current.addEventListener('click', this.toggleMenu)
  }


  toggleMenu = () => {
    this.setState(prevState => ({
        showMenu: !prevState.showMenu
    }), this.triggerMenu());
  }
  

  triggerMenu = () => {
    const {showMenu} = this.state;
    const {toggleMenu} = this.animations;
    showMenu ? toggleMenu.reverse() : toggleMenu.play();
  }

  
  closeMenu = () => {
    this.setState({showMenu: false})
    this.triggerCloseMenu()
  }
  
  
  triggerCloseMenu = () => {
    const {toggleMenu} = this.animations;
    toggleMenu.reverse();
  }


  render() {
    const {showMenu} = this.state;
    const {hamburger, lineOne, lineTwo, lineThree} = this.DOMElms
    
    return (
      <React.Fragment>
        <TopBar 
          showMenu={showMenu}
          hamburger={hamburger}
          lineOne={lineOne}
          lineTwo={lineTwo}
          lineThree={lineThree}
          />
        <NavBar 
          showMenu={showMenu} 
          closeMenu={this.closeMenu}/>
        <Main />
      </React.Fragment>
    )
  }
  
}


export default App;
