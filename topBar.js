import React from "react";

const TopBar = props => {
  const {hamburger, lineOne, lineTwo, lineThree, showMenu} = props;
  const svgClass = showMenu ? 'hamburger js-change-color' : 'hamburger';

  return(
    <div className="topbar">JS Documentation
      <svg ref={hamburger} className={svgClass} xmlns="http://www.w3.org/2000/svg" viewBox="17 28 45 45">
        <line ref={lineOne} className="line-one" x1="25" y1="42" x2="55" y2="42" fill="none" strokeMiterlimit="10" strokeWidth="4"/>
        <line ref={lineTwo} className="line-two" x1="20" y1="50" x2="55" y2="50" fill="none" strokeMiterlimit="10" strokeWidth="4"/>
        <line ref={lineThree} className="line-three" x1="25" y1="58" x2="55" y2="58" fill="none" strokeMiterlimit="10" strokeWidth="4"/>
      </svg>
    </div>
  )
}

export default TopBar;
