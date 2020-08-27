import React, { Component } from 'react';

class Header extends Component {
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
