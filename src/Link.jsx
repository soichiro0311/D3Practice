///////////////////////////////////////////////////////////
/////// Link component
///////////////////////////////////////////////////////////
import React, { Component } from 'react';
import * as d3 from 'd3'
import ReactDOM from 'react-dom';
import FORCE from './D3ForeceUtil';

class Link extends React.Component {

  componentDidMount() {
    this.d3Link = d3.select(ReactDOM.findDOMNode(this))
      .datum(this.props.data)
      .call(FORCE.enterLink);
  }

  componentDidUpdate() {
    this.d3Link.datum(this.props.data)
      .call(FORCE.updateLink);
  }

  render() {
    return (
      <line className='link' />
    );
  }
}

export default Link;