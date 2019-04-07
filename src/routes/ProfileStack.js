import React from 'react';
import {createStackNavigator} from "react-navigation";
import Profile from '../screens/Profile';

export default createStackNavigator(
  {
    Profile: {
      screen: Profile
    }
  }
);