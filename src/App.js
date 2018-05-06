import React, { Component } from 'react'
import { Provider } from 'react-redux';

import store from './Store';
import BaseNavigation from './Navigator';

const App = () => (
  <Provider store={store}>
    <BaseNavigation />
  </Provider>
);


export default App
