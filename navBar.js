import React from "react";

const NavBar = props => {
  const {showMenu, closeMenu} = props;
  const sections = ['Introduction', 'What you should already know', 'JavaScript and Java', 'Hello world', 'Variables', 'Declaring variables', 'Variable scope', 'Global variables', 'Constants', 'Data types', 'if...else statement', 'while statement', 'Function declarations', 'Reference']
  const navLi = sections.map((section, i) => (
      <li key={i}><i className="fas fa-chevron-right"></i><a onClick={closeMenu} className="nav-link" href={'#'+section.split(' ').join('_')} rel="internal">{section}</a></li>
    ))
  
  return (
    <React.Fragment>
      <nav role="navigation" id="navbar" style={{transform: showMenu ? 'translateX(0px)' : null}}>
        <header role="banners"></header>
        <ul> 
          {navLi}
        </ul>
      </nav>
      <div 
        className="dark-bg"
        onClick={closeMenu}
        style={{zIndex: showMenu ? 0 : -1, opacity: showMenu ? 1 : 0}}></div>
    </React.Fragment>
  )
}

export default NavBar;
