import React from 'react';

import AppContext from '@app/core/AppContext';

class Module<R> extends React.Component<{ params: R; children: React.ReactNode }> {
  static contextType = AppContext;
  context!: React.ContextType<typeof AppContext>;
  unregister!: () => void;

  componentDidMount() {
    this.unregister = this.context.register(this.props.params);
  }

  componentWillUnmount() { 
    this.unregister();

  }
  render() {
    return this.props.children;
  }
}

export default Module;
