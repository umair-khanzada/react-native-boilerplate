import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import {THEME_CONFIG} from "../styles";

// TODO: Fetch from DB or local json/js file.
const list = [
  {
    title: 'Notification',
    icon: 'notification',
    key: 'notification'
  },
  {
    title: 'Customer Service',
    icon: 'customerservice',
    key: 'customer_service'
  },
  {
    title: 'Filters',
    icon: 'filter',
    key: 'filters'
  },
  {
    title: 'Call Setting',
    icon: 'mobile1',
    key: 'call_setting'
  },
  {
    title: 'Location',
    icon: 'enviromento',
    key: 'location'
  },
  {
    title: 'Favorite',
    icon: 'hearto',
    key: 'Favorite'
  },
  {
    title: 'Clock',
    icon: 'clockcircleo',
    key: 'clock'
  }
];

class Settings extends Component{
  constructor(props){
    super(props);

    // This is for auto generate state keys according to setting list.
    const settingsState = {};
    list.forEach((obj) => settingsState[obj.key] = false);

    this.state = {
      ...settingsState
    };
  }

  onValueChange = (name) => (value) => {
    // Do something...
    this.setState({[name]: value})
  };

  render () {
    return (
      <ScrollView>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              switch={{value: this.state[item.key], onValueChange: this.onValueChange(item.key), thumbColor: THEME_CONFIG.PRIMARY_COLOR}}
              bottomDivider
              contentContainerStyle={{paddingVertical: 15}}
              title={item.title}
              leftIcon={{name: item.icon}}
            />
          ))
        }
      </ScrollView>
    )
  }
}

Settings.propTypes = {};

Settings.defaultProps = {};


export default Settings