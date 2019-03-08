import React, {Component} from 'react';
import {View} from 'react-native';
import Navigator from './navigation';
import {theme} from './style'

export default class App extends Component {
  render() {
    return (
      <View style={theme.rootContainer}>
        <Navigator />
      </View>
    );
  }
}
