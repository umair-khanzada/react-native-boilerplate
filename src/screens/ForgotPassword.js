import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Icon, Input } from 'react-native-elements';
import Button from '../components/Button';
import Link from '../components/Link';
import {theme, THEME_CONFIG} from "../style";

class ForgotPassword extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  navigateToLogin = () => {
    this.props.navigation.navigate('Login')
  };

  render () {
    return (
      <View style={theme.container}>
        <View style={[theme.logo, {flex: 1}]}>
          <Icon type="antdesign" name="setting" iconStyle={{color: '#000', fontSize: 200}} />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Input
            label={<Text style={theme.labelStyle}>Email</Text>}
            placeholder='Email'
            inputStyle={theme.inputStyle}
            inputContainerStyle={theme.inputContainerStyle}
            containerStyle={theme.containerStyle}
            leftIcon={{name: 'envelope-o', type: 'font-awesome', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
          />
          <Button text="Forgot Password"/>
          <Link hint="Back to" text="Login" onPress={this.navigateToLogin}/>
        </View>
      </View>
    )
  }
}

ForgotPassword.propTypes = {}

ForgotPassword.defaultProps = {}


export default ForgotPassword