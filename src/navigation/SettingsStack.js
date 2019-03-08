import React from 'react';
import {createStackNavigator} from "react-navigation";
import Settings from '../screens/Settings';
export default createStackNavigator(
  {
    Settings: {
      screen: Settings
    }
  }
);