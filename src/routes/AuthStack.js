import React from 'react';
import {createStackNavigator} from "react-navigation";
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';

export default createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    },
    ForgotPassword: {
      screen: ForgotPassword
    }
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
  }
);