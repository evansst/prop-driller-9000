import React from 'react';

export default function Header(props){
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
