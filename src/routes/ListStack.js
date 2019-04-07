import React from 'react';
import {createStackNavigator} from "react-navigation";
import List from '../screens/List';

export default createStackNavigator(
  {
    List: {
      screen: List
    }
  }
);