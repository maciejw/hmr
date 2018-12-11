

import React, { Suspense } from 'react';
import ReactDom from 'react-dom';
import { App } from '@app/main';
import AppContext from '@app/core/AppContext';

import { BrowserRouter } from 'react-router-dom';

const context: AppContext.Context = {
  unregister(params) {
    console.log('unregister', params);
  },
  register(params) {
    console.log('register', params);
    return () => { 
      context.unregister(params)
    }
  }
};

import './polyfills'
function main() {
  const root = document.createElement('div');
  document.body.appendChild(root);

  ReactDom.render(
    <Suspense fallback={<div>Loading...</div>}>
      <AppContext.Provider value={context}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppContext.Provider>
    </Suspense>,
    root
  );
}
main();


