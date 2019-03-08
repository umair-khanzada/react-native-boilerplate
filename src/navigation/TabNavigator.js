import React from 'react';
import {createBottomTabNavigator} from "react-navigation";
import ListStack from './ListStack';
import ChatStack from './ChatStack';
import ProfileStack from './ProfileStack';
import SettingsStack from './SettingsStack';
import {StyleSheet, View} from "react-native";
import {Icon} from 'react-native-elements';
import {THEME_CONFIG} from "../style";

export default createBottomTabNavigator(
  {
    List: {
      screen: ListStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon type="antdesign" name="bars" iconStyle={{color: tintColor}} />
      }
    },
    Chat: {
      screen: ChatStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon type="antdesign" name="message1" iconStyle={{color: tintColor}} />
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon type="antdesign" name="user" iconStyle={{color: tintColor}} />
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon type="antdesign" name="setting" iconStyle={{color: tintColor}} />
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: THEME_CONFIG.primaryColor,
      inactiveTintColor : THEME_CONFIG.primaryTextColor,
      activeBackgroundColor: THEME_CONFIG.primaryTextColor,
      style: {backgroundColor: THEME_CONFIG.primaryColor}
    }
  }
);