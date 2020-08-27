import React, { Component } from 'react';
import Transformer from '../Components/Transformer';

class TransformersSection extends Component {

  
  render() {
    const { isOn, handleClick, displayIndex, transformers, } = this.props

    return (
      <section className = "transformers-section">
        { isOn 
          ? this.toTransformerComponent(transformers[displayIndex])(handleClick)
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
}

export default TransformersSection;
