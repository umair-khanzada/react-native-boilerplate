import React from 'react';
import {createStackNavigator} from "react-navigation";
import Chat from '../screens/Chat';

export default createStackNavigator(
  {
    Chat: {
      screen: Chat
    }
  }
);