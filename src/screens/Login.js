import React, {Component} from 'react';
import PropTypes from 'prop-types'
import validate from 'validate.js';
import {View, ScrollView} from 'react-native'
import {Icon, Input, CheckBox, Button, Text} from 'react-native-elements'
import {emailConstraint, passwordConstraint, mapErrorMessage} from '../util';
// import Button from '../components/Button';
import Link from '../components/Link';
import Container from '../components/container';
import TogglePasswordVisibility from '../components/TogglePasswordVisibility';
import {theme, THEME_CONFIG} from '../styles';
import style from '../styles/login.style';

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
        <Container>
          <View style={theme.logo}>
            <Icon type="antdesign" name="setting" iconStyle={{color: '#000', fontSize: 200}} />
          </View>
          <View>
            <Input
              name="email"
              label={<Text>Email</Text>}
              placeholder='Email'
              leftIcon={{name: 'envelope-o', type: 'font-awesome'}}
              errorMessage={mapErrorMessage('email', errors)}
              // autoFocus
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
              label={<Text>Password</Text>}
              placeholder='Password'
              ref={(ref) => this.passwordInputRef = ref}
              leftIcon={{name: 'lock'}}
              rightIcon={<TogglePasswordVisibility visible={!secureTextEntry} onPressHandler={this.toggleSecureTextEntry} disabled={!password}/>}
              errorMessage={mapErrorMessage('password', errors)}
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
                  titleProps={{style: [{marginHorizontal: 5}]}}
                />
              </View>
              <View style={style.forgotPassword}>
                <Link text="Forgot Password" onPress={this.navigateToForgotPassword}/>
              </View>
            </View>
            <Button title="Login" loading={loading} onPress={this.handleSubmit}/>
            <View style={style.or}>
              <Text>OR</Text>
            </View>
            <Button
              title="Login with facebook"
              buttonStyle={[{backgroundColor: '#3b5998'}]}
              // icon={<Icon type="evilicon" name="sc-facebook" color={THEME_CONFIG.primaryTextColor} containerStyle={{justifyContent: 'center'}} size={THEME_CONFIG.iconSize+5}/>}
            />
            <Button
              title="Login with google"
              buttonStyle={[{backgroundColor: '#c94130'}]}
            />
            <Link hint="Don't have an account?" text="Register Now" onPress={this.navigateToRegister}/>
          </View>
        </Container>
      </ScrollView>
    )
  }
}

Login.propTypes = {};

Login.defaultProps = {};


export default Login