import React from 'react';

function Transformer({ src, alt, handleClick, }) {
  return (
    <img
      className = 'transformer'
      src = {src}
      alt = {alt}
      onClick = {handleClick}
    />
  );
}

export default Transformer;
