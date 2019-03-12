import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Text, ToastAndroid } from 'react-native'
import { Icon, Input } from 'react-native-elements';
import Button from '../components/Button';
import Link from '../components/Link';
import {theme, THEME_CONFIG} from "../style";

class ForgotPassword extends Component{
  constructor(props){
    super(props);

    this.state = {email: '', loading: false};
  }

  emailChangeHandler = (email) => this.setState({email});

  onSubmit = () => {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({loading: false});
      ToastAndroid.show('Reset password link sent.', ToastAndroid.SHORT);
    }, 1000)
  };

  navigateToLogin = () => {
    this.props.navigation.navigate('Login')
  };

  render () {
    const {email, loading} = this.state;
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
            autoFocus
            enablesReturnKeyAutomatically
            returnKeyType="done"
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            value={email}
            onChangeText={this.emailChangeHandler}
            onSubmitEditing={this.onSubmit}
          />
          <Button text="Forgot Password" loading={loading} touchableProps={{onPress: this.onSubmit}}/>
          <Link hint="Back to" text="Login" onPress={this.navigateToLogin}/>
        </View>
      </View>
    )
  }
}

ForgotPassword.propTypes = {}

ForgotPassword.defaultProps = {}


export default ForgotPassword