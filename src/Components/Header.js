import React from 'react';

function Header({ logo, handleClick, }){
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
