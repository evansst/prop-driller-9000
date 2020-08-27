import React from 'react';

function Transformer(props) {
  const { id, name, url, } = props.transformer

  return (
    <img
      className = 'transformer'
      id = {id}
      src = {url}
      alt = {name}
    />
  );
}

export default Transformer;
