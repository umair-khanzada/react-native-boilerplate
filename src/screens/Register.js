import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Button from '../components/Button';
import Link from '../components/Link';
import {theme, THEME_CONFIG} from '../style';
import style from "../style/register.style";

class Register extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  navigateToLogin = () => {
    this.props.navigation.navigate('Login')
  };

  render () {
    return (
      <ScrollView>
        <View style={theme.container}>
          <View style={theme.logo}>
            <Icon type="antdesign" name="setting" iconStyle={{color: '#000', fontSize: 200}} />
          </View>
          <View style={style.registrationFrom}>
            <Input
              label={<Text style={theme.labelStyle}>First Name</Text>}
              placeholder='First Name'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'user', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
            />
            <Input
              label={<Text style={theme.labelStyle}>Last Name</Text>}
              placeholder='Last Name'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'user', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
            />
            <Input
              label={<Text style={theme.labelStyle}>Email</Text>}
              placeholder='Email'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'envelope-o', type: 'font-awesome', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
            />
            <Input
              label={<Text style={theme.labelStyle}>Password</Text>}
              placeholder='Password'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'lock', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
              rightIcon={{name: 'eye', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize, iconStyle: {marginHorizontal: 5}}}
            />
            <Input
              label={<Text style={theme.labelStyle}>Confirm Password</Text>}
              placeholder='Confirm Password'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'lock', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
              rightIcon={{name: 'eye', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize, iconStyle: {marginHorizontal: 5}}}
            />
            <Button text="Register"/>
            <Link hint="Already have an account?" text="Login Here" onPress={this.navigateToLogin}/>
          </View>
        </View>
      </ScrollView>
    )
  }
}

Register.propTypes = {}

Register.defaultProps = {}


export default Register