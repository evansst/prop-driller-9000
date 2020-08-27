import React from 'react';

function Header(props){
  const { logo, handleClick, } = props
  
  return (
    <header>
      <img
        src = {logo}
        alt = "logo"
        onClick = {handleClick}
      />
    </header>
  )
}

export default Header;
