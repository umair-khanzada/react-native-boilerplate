import React from 'react';
import {createBottomTabNavigator} from "react-navigation";
import ListStack from './ListStack';
import ChatStack from './ChatStack';
import ProfileStack from './ProfileStack';
import SettingsStack from './SettingsStack';
import {StyleSheet, View} from "react-native";
import {Icon} from 'react-native-elements';
import {THEME_CONFIG} from "../styles";

export default createBottomTabNavigator(
  {
    List: {
      screen: ListStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="bars" iconStyle={{color: tintColor}} />
      }
    },
    Chat: {
      screen: ChatStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="message1" iconStyle={{color: tintColor}} />
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="user" iconStyle={{color: tintColor}} />
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="setting" iconStyle={{color: tintColor}} />
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: THEME_CONFIG.PRIMARY_COLOR,
      inactiveTintColor : '#fff',
      activeBackgroundColor: '#ffff',
      style: {backgroundColor: THEME_CONFIG.PRIMARY_COLOR}
    }
  }
);