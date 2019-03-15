import React, { Component } from 'react';
import PropTypes from 'prop-types'
import validate from 'validate.js';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { Icon, Input, CheckBox } from 'react-native-elements'
import {emailConstraint, passwordConstraint, mapErrorMessage} from '../util';
import Button from '../components/Button';
import Link from '../components/Link';
import TogglePasswordVisibility from '../components/TogglePasswordVisibility';
import {theme, THEME_CONFIG} from '../style';
import style from '../style/login.style';

class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      remember_me: true,
      secureTextEntry: true,
      loading: false
    };

    //References.
    this.scrollViewRef = null;
    this.passwordInputRef = null;
  }

  emailChangeHandler = (email) => this.setState({email});
  passwordChangeHandler = (password) => this.setState({password});

  emailSubmitEditing = () => {
    // TODO: Dynamic y value from passwordInputRef's y value.
    this.scrollViewRef.scrollTo({y: 100, animated: true});
    this.passwordInputRef.focus()
  };

  toggleSecureTextEntry = () => {
    this.setState({secureTextEntry: !this.state.secureTextEntry})
  };

  navigateToForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword')
  };

  navigateToApp = () => {
    //Temporary for display loading.

  };

  navigateToRegister = () => {
    this.props.navigation.navigate('Register')
  };

  handleSubmit = () => {
    let {email, password} = this.state;
    email = email || undefined;
    password = password || undefined;
    const errors = validate(
      {email, password},                              // Payload object.
      {...emailConstraint, ...passwordConstraint},    // Constraint object.
      {fullMessages: false}                           // Config object.
    );

    if(errors){
      this.setState({errors});
    } else {
      this.setState({loading: true, errors});
      setTimeout(() => {
        this.setState({loading: false});
        this.props.navigation.navigate('App')
      }, 1000)
    }
  };

  render () {
    const {email, password, secureTextEntry, loading, errors} = this.state;
    return (
      <ScrollView ref={(ref) => this.scrollViewRef = ref}>
        <View style={theme.container}>
          <View style={theme.logo}>
            <Icon type="antdesign" name="setting" iconStyle={{color: '#000', fontSize: 200}} />
          </View>
          <View>
            <Input
              name="email"
              label={<Text style={theme.labelStyle}>Email</Text>}
              placeholder='Email'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'envelope-o', type: 'font-awesome', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
              errorMessage={mapErrorMessage('email', errors)}
              errorStyle={theme.errorStyle}
              autoFocus
              enablesReturnKeyAutomatically
              returnKeyType="next"
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              value={email}
              onChangeText={this.emailChangeHandler}
              onSubmitEditing={this.emailSubmitEditing}
              blurOnSubmit={false}
            />
            <Input
              name="password"
              label={<Text style={theme.labelStyle}>Password</Text>}
              placeholder='Password'
              ref={(ref) => this.passwordInputRef = ref}
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'lock', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
              rightIcon={<TogglePasswordVisibility visible={!secureTextEntry} onPressHandler={this.toggleSecureTextEntry} disabled={!password}/>}
              errorMessage={mapErrorMessage('password', errors)}
              errorStyle={theme.errorStyle}
              secureTextEntry={secureTextEntry}
              enablesReturnKeyAutomatically
              returnKeyType="done"
              autoCapitalize="none"
              autoComplete="password"
              value={password}
              onChangeText={this.passwordChangeHandler}
              onSubmitEditing={this.handleSubmit}
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
                <Link text="Forgot Password" onPress={this.navigateToForgotPassword}/>
              </View>
            </View>
            <Button text="Login" loading={loading} touchableProps={{onPress: this.handleSubmit}}/>
            <View style={style.or}>
              <Text style={[theme.labelStyle]}>OR</Text>
            </View>
            <Button
              icon={<Icon type="evilicon" name="sc-facebook" color={THEME_CONFIG.primaryTextColor} containerStyle={{justifyContent: 'center'}} size={THEME_CONFIG.iconSize+5}/>}
              text="Login With Facebook"
              containerStyle={{backgroundColor: '#3b5998'}}
              ripple="#81a1e2"
            />
            <Button
              icon={<Icon type="evilicon" name="sc-google-plus" color={THEME_CONFIG.primaryTextColor} containerStyle={{justifyContent: 'center'}} size={THEME_CONFIG.iconSize+5}/>}
              text=" Login With Google"
              containerStyle={{backgroundColor: '#c94130'}}
              ripple="#dc9188"
            />
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