import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Icon, Input, CheckBox } from 'react-native-elements'
import Button from '../components/Button';
import Link from '../components/Link';
import {theme, THEME_CONFIG} from '../style';
import style from '../style/login.style';

class Login extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  navigateToRegister = () => {
    this.props.navigation.navigate('Register')
  };

  navigateToForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword')
  };

  navigateToApp = () => {
    this.props.navigation.navigate('App')
  };

  render () {
    return (
      <ScrollView>
        <View style={theme.container}>
          <View style={theme.logo}>
            <Icon type="antdesign" name="setting" iconStyle={{color: '#000', fontSize: 200}} />
          </View>
          <View style={style.loginFrom}>
            <Input
              label={<Text style={theme.labelStyle}>Email</Text>}
              placeholder='Email'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'envelope-o', type: 'font-awesome', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
              errorMessage="Email is required!"
              errorStyle={theme.errorStyle}
            />
            <Input
              label={<Text style={theme.labelStyle}>Password</Text>}
              placeholder='Password'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'lock', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
              rightIcon={{name: 'eye', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize, iconStyle: {marginHorizontal: 5}}}
              errorMessage="Password is required!"
              errorStyle={theme.errorStyle}
            />
            <View style={style.rememberMeParent}>
              <View style={style.rememberMe}>
                <CheckBox
                  title='Remember me'
                  checked={true}
                  iconType="antdesign"
                  checkedIcon="checksquare"
                  uncheckedIcon="closesquare"
                  checkedColor={THEME_CONFIG.primaryColor}
                  uncheckedColor={THEME_CONFIG.secondaryColor}
                  titleProps={{style: [theme.labelStyle, {marginHorizontal: 5}]}}
                  containerStyle={theme.checkboxContainer}
                />
              </View>
              <View style={style.forgotPassword}>
                <TouchableOpacity onPress={this.navigateToForgotPassword}>
                  <Text style={[theme.labelStyle, {color: THEME_CONFIG.primaryColor}]}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Button text="Login" touchableProps={{onPress: this.navigateToApp}}/>
            <View style={style.or}>
              <Text style={[theme.labelStyle]}>OR</Text>
            </View>
            <Button text="Login With Facebook"/>
            <Button text="Login With Google"/>
            <Link hint="Don't have an account?" text="Register Now" onPress={this.navigateToRegister}/>
          </View>
        </View>
      </ScrollView>
    )
  }
}

Login.propTypes = {}

Login.defaultProps = {}


export default Login