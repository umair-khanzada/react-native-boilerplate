import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import {
  firstNameConstraint,
  lastNameConstraint,
  emailConstraint,
  passwordConstraint,
  confirmPasswordConstraint,
  mapErrorMessage
} from '../util';
import Button from '../components/Button';
import Link from '../components/Link';
import TogglePasswordVisibility from '../components/TogglePasswordVisibility';
import {theme, THEME_CONFIG} from '../style';
import style from "../style/register.style";
import validate from "validate.js";

class Register extends Component{
  constructor(props){
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      secureTextEntry: true,
      confirmPasswordSecureTextEntry: true,
      loading: false
    };

    //References.
    this.scrollViewRef = null;
    this.lastNameInputRef = null;
    this.emailInputRef = null;
    this.passwordInputRef = null;
    this.confirmPasswordInputRef = null;
  }

  // TODO: Use onChange instead,
  firstNameChangeHandler = (first_name) => this.setState({first_name});
  lastNameChangeHandler = (last_name) => this.setState({last_name});
  emailChangeHandler = (email) => this.setState({email});
  passwordChangeHandler = (password) => this.setState({password});
  confirmPasswordChangeHandler = (confirm_password) => this.setState({confirm_password});

  changeFocus = (ref, y) => {
    // TODO: Dynamic y value current passed hardcoded values, input's y value.
    this.scrollViewRef.scrollTo({y, animated: true});
    ref.focus()
  };

  toggleSecureTextEntry = () => {
    this.setState({secureTextEntry: !this.state.secureTextEntry})
  };

  toggleConfirmPasswordSecureTextEntry = () => {
    this.setState({confirmPasswordSecureTextEntry: !this.state.confirmPasswordSecureTextEntry})
  };

  handleSubmit = () => {
    let {first_name, last_name, email, password, confirm_password} = this.state;
    first_name = first_name || undefined;
    last_name = last_name || undefined;
    email = email || undefined;
    password = password || undefined;
    confirm_password = confirm_password || undefined;

    const errors = validate(
      {first_name, last_name, email, password, confirm_password},         // Payload object.
      {
        ...firstNameConstraint,
        ...lastNameConstraint,
        ...emailConstraint,
        ...passwordConstraint,
        ...confirmPasswordConstraint
      },                                                                  // Constraint object.
      {fullMessages: false}                                               // Config object.
    );

    if(errors){
      this.setState({errors});
    } else {
      this.setState({loading: true, errors});
      setTimeout(() => {
        this.setState({loading: false});
        ToastAndroid.show('Successfully registered.', ToastAndroid.SHORT);
      }, 1000)
    }
  };

  navigateToLogin = () => {
    this.props.navigation.navigate('Login')
  };

  render () {
    const {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
      secureTextEntry,
      confirmPasswordSecureTextEntry,
      loading,
      errors
    } = this.state;

    return (
      <ScrollView ref={(ref) => this.scrollViewRef = ref}>
        <View style={theme.container}>
          <View style={theme.logo}>
            <Icon type="antdesign" name="setting" iconStyle={{color: '#000', fontSize: 200}} />
          </View>
          <View>
            <Input
              label={<Text style={theme.labelStyle}>First Name</Text>}
              placeholder='First Name'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'user', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
              autoFocus
              enablesReturnKeyAutomatically
              returnKeyType="next"
              errorMessage={mapErrorMessage('first_name', errors)}
              errorStyle={theme.errorStyle}
              value={first_name}
              onChangeText={this.firstNameChangeHandler}
              onSubmitEditing={() => this.changeFocus(this.lastNameInputRef, 100)}
              blurOnSubmit={false}
            />
            <Input
              ref={(ref) => this.lastNameInputRef = ref}
              label={<Text style={theme.labelStyle}>Last Name</Text>}
              placeholder='Last Name'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'user', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
              enablesReturnKeyAutomatically
              returnKeyType="next"
              errorMessage={mapErrorMessage('last_name', errors)}
              errorStyle={theme.errorStyle}
              value={last_name}
              onChangeText={this.lastNameChangeHandler}
              onSubmitEditing={() => this.changeFocus(this.emailInputRef, 180)}
              blurOnSubmit={false}
            />
            <Input
              ref={(ref) => this.emailInputRef = ref}
              label={<Text style={theme.labelStyle}>Email</Text>}
              placeholder='Email'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'envelope-o', type: 'font-awesome', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
              enablesReturnKeyAutomatically
              returnKeyType="next"
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              errorMessage={mapErrorMessage('email', errors)}
              errorStyle={theme.errorStyle}
              value={email}
              onChangeText={this.emailChangeHandler}
              onSubmitEditing={() => this.changeFocus(this.passwordInputRef, 260)}
              blurOnSubmit={false}
            />
            <Input
              ref={(ref) => this.passwordInputRef = ref}
              label={<Text style={theme.labelStyle}>Password</Text>}
              placeholder='Password'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'lock', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
              rightIcon={<TogglePasswordVisibility visible={!secureTextEntry} onPressHandler={this.toggleSecureTextEntry} disabled={!password}/>}
              errorMessage={mapErrorMessage('password', errors)}
              errorStyle={theme.errorStyle}
              secureTextEntry={secureTextEntry}
              enablesReturnKeyAutomatically
              returnKeyType="next"
              autoCapitalize="none"
              autoComplete="password"
              value={password}
              onChangeText={this.passwordChangeHandler}
              onSubmitEditing={() => this.changeFocus(this.confirmPasswordInputRef, 340)}
              blurOnSubmit={false}
            />
            <Input
              ref={(ref) => this.confirmPasswordInputRef = ref}
              label={<Text style={theme.labelStyle}>Confirm Password</Text>}
              placeholder='Confirm Password'
              inputStyle={theme.inputStyle}
              inputContainerStyle={theme.inputContainerStyle}
              containerStyle={theme.containerStyle}
              leftIcon={{name: 'lock', type: 'antdesign', color: THEME_CONFIG.primaryColor, size: THEME_CONFIG.iconSize}}
              rightIcon={<TogglePasswordVisibility visible={!confirmPasswordSecureTextEntry} onPressHandler={this.toggleConfirmPasswordSecureTextEntry} disabled={!confirm_password}/>}
              errorMessage={mapErrorMessage('confirm_password', errors)}
              errorStyle={theme.errorStyle}
              secureTextEntry={confirmPasswordSecureTextEntry}
              enablesReturnKeyAutomatically
              returnKeyType="done"
              autoCapitalize="none"
              autoComplete="password"
              value={confirm_password}
              onChangeText={this.confirmPasswordChangeHandler}
              onSubmitEditing={this.handleSubmit}
            />
            <Button text="Register" loading={loading} touchableProps={{onPress: this.handleSubmit}}/>
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