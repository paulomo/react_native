/**
 * @format
 */
/*
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/

// import a library to create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a component
const App = () => (
    <Header />
);

// render the component to the device
AppRegistry.registerComponent('AwesomeProject', () => App);
