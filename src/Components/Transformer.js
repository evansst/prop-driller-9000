import React, { Component } from 'react';

class Transformer extends Component {
  render() { 
    return (
      <img
        className = 'transformer'
        src = {this.props.src}
        alt = {this.props.alt}
        onClick = {this.props.handleClick}
      />
    );
  }
}

export default Transformer;
