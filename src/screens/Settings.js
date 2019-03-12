import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import {THEME_CONFIG} from "../style";


const list = [
  {
    title: 'Notification',
    icon: 'notification'
  },
  {
    title: 'Customer Service',
    icon: 'customerservice'
  },
  {
    title: 'Filter',
    icon: 'filter'
  },
  {
    title: 'Call Setting',
    icon: 'mobile1'
  },
  {
    title: 'Location',
    icon: 'enviromento'
  },
  {
    title: 'Favorite',
    icon: 'hearto'
  },
  {
    title: 'Clock',
    icon: 'clockcircleo'
  }
];

class Settings extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render () {
    return (
      <ScrollView>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              switch
              bottomDivider
              contentContainerStyle={{paddingVertical: 15}}
              title={item.title}
              titleStyle={{fontFamily: THEME_CONFIG.primaryFontFamily, fontSize: THEME_CONFIG.subHeadingFontSize, color: THEME_CONFIG.primaryColor}}
              leftIcon={{type: 'antdesign', name: item.icon, color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
            />
          ))
        }
      </ScrollView>
    )
  }
}

Settings.propTypes = {}

Settings.defaultProps = {}


export default Settings