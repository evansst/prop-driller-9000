import React, { Component } from 'react';
import Transformer from '../Components/Transformer';

class TransformersSection extends Component {

  
  render() {
    const { isOn, handleClick, displayIndex, transformers, } = this.props

    return (
      <section className = "transformers-section" onClick={handleClick}>
        { isOn 
          ? this.toTransformerComponent(transformers[displayIndex])
          : undefined
        }
      </section>
    );
  }
  
  toTransformerComponent(transformer) {
    return (
      <Transformer 
        key={transformer.id}
        id={transformer.id}
        src={transformer.url}
        alt={transformer.name}
      />
    )
  }
}

export default TransformersSection;
