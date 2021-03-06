import React from 'react';

export default function Transformer(props) {
  const { 
    transformer: { id, name, url, },
    handleClick, 
  } = props

  return (
    <img
      className = 'transformer'
      id = {id}
      src = {url}
      alt = {name}
      onClick = {handleClick}
    />
  );
}
