/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var Main = require('./app/components/main');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#111111'
  }
})

class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute = {{
          title: 'Eric Navigator', 
          component: Main
        }} />
    );
  }
}


AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
