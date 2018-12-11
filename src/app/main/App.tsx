import React, { Component, lazy } from 'react';
import { hot } from 'react-hot-loader';

import { Header } from './Header';

const Module1 = lazy(() => import('@app/module1'));

import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

class App extends Component<{ x: string }> {
  static defaultProps = { x: 'bla' };

  render() {
    return (
      <>
        <Header />
        <div style={{ color: 'red' }}>hello {this.props.x} !!</div>
        <div>
          <Link to="/">/</Link>
        </div>
        <div>
          <Link to="/module1">module1</Link>
        </div>
        <Switch>
          <Route path="/module1">
            <Module1 prop1={this.props.x} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default hot(module)(App);
