import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import Button from '../components/Button';
import {theme} from '../style';
import style from '../style/home.style';

class Home extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  navigateToLogin = () => {
    // For ripple effect.
    setTimeout(() =>
      this.props.navigation.navigate('Login'),
    )
  };

  navigateToRegister = () => {
    // For ripple effect.
    setTimeout(() =>
        this.props.navigation.navigate('Register'),
    )
  };

  render () {
    return (
      <View style={theme.container}>
        <View style={[{flex: 2}, theme.logo]}>
          <Icon type="antdesign" name="setting" iconStyle={{color: '#000', fontSize: 200}} />
        </View>
        <View style={style.buttonsArea}>
          <Button text="Log In" touchableProps={{onPress: this.navigateToLogin}}/>
          <Button text="Register" touchableProps={{onPress: this.navigateToRegister}}/>
        </View>
      </View>
    )
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;