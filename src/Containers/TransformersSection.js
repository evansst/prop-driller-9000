import React, { Component } from 'react';
import Transformer from '../Components/Transformer';

class TransformersSection extends Component {

  render() {
    return (
      <section className = "transformers-section" onClick={this.props.handleClick}>
        {this.props.isOn ? this.toTransformerComponent(this.props.transformers[this.props.displayIndex]) : <div/>}
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
