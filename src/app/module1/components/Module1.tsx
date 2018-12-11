import React, { Component } from 'react';
import Module from '@app/core';


const params = {
  module1: {}
}
class Module1 extends Component<{ prop1: string }> {
  static defaultProps = { prop1: 'hello' };
  render() {
    return <Module params={params}>module1 {this.props.prop1} !</Module>;
  }
}
export default Module1;
