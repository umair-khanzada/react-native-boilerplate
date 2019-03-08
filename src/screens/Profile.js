import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

class Profile extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render () {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    )
  }
}

Profile.propTypes = {}

Profile.defaultProps = {}


export default Profile