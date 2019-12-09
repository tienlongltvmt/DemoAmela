/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import TabNavigation from './src/navigation/TabNavigation';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './redux/store/store';

const store = configureStore();
const RNRedux = () => (
  <Provider store={store}>
    <TabNavigation />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
