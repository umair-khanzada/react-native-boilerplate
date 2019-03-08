import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: TabNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);