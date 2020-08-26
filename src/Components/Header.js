import React, { Component } from 'react';

class Header extends Component {
  state = {
    displayTransformer: false,
  }

  render() {
    return (
      <header>
        <img
          src = {this.props.src}
          alt = "logo"
          onClick = {this.props.handleClick}
        />
      </header>
    )
  }

}

export default Header;
