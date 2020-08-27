import React, { Component } from 'react';
import Transformer from '../Components/Transformer';

export default class TransformersSection extends Component {
  state = {
    displayIndex: 0,
  }



  
  render() {
    const { isOn, transformers, } = this.props
    const { displayIndex } = this.state

    return (
      <section className = "transformers-section">
        { isOn 
          ? this.toTransformerComponent(transformers[displayIndex])(this.handleTransformerClick)
          : undefined
        }
      </section>
    );
  }
  
  toTransformerComponent(transformer) {
    return (handleClick) => {
      return (
        <Transformer 
          key={transformer.id}
          transformer={transformer}
          handleClick={handleClick}
        />
      )
    }
  }

  handleTransformerClick = () => {
    this.state.displayIndex < 2
      ? this.setState({displayIndex: this.state.displayIndex + 1})
      : this.setState({displayIndex: 0})
  } 
}
