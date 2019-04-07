import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View, ScrollView, ImageBackground, TouchableOpacity, ToastAndroid} from 'react-native'
import {Icon, Input, Text, Button} from 'react-native-elements'
import Container from '../components/container';
import Link from '../components/Link';
import {theme, THEME_CONFIG} from "../styles";
import style from "../styles/profile.style";

class Profile extends Component{
  constructor(props){
    super(props);

    this.state = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@example.com',
      loading: false,
      editable: true
    };

    //References.
    this.scrollViewRef = null;
    this.lastNameInputRef = null;
    this.emailInputRef = null;
  }

  // TODO: Use onChange instead,
  firstNameChangeHandler = (first_name) => this.setState({first_name});
  lastNameChangeHandler = (last_name) => this.setState({last_name});
  emailChangeHandler = (email) => this.setState({email});

  changeFocus = (ref, y) => {
    // TODO: Dynamic y value current passed hardcoded values, input's y value.
    this.scrollViewRef.scrollTo({y, animated: true});
    ref.focus()
  };

  onSubmit = () => {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState({loading: false});
      ToastAndroid.show('Successfully Updated.', ToastAndroid.SHORT);
    }, 1000)
  };

  render () {
    const {first_name, last_name, email, loading, editable} = this.state;
    return (
      <ScrollView ref={(ref) => this.scrollViewRef = ref}>
        <ImageBackground source={require('../assets/images/profile.jpg')} style={style.backgroundImage}>
          <View style={style.profileImageSection}>
            <View style={style.profileNameSection}>
              <Text style={style.name}>{first_name} {last_name}</Text>
            </View>
            <View style={style.profileEditButtonSection}>
              <TouchableOpacity style={style.roundButton} >
                <Icon name="camerao" iconStyle={[{color: '#fff'}]} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <Container>
          <View>
            <Input
              label={<Text>First Name</Text>}
              placeholder='First Name'
              leftIcon={{name: 'user'}}
              enablesReturnKeyAutomatically
              returnKeyType="next"
              value={first_name}
              onChangeText={this.firstNameChangeHandler}
              onSubmitEditing={() => this.changeFocus(this.lastNameInputRef, 250)}
              blurOnSubmit={false}
              editable={editable}
            />
            <Input
              ref={(ref) => this.lastNameInputRef = ref}
              label={<Text>Last Name</Text>}
              placeholder='Last Name'
              leftIcon={{name: 'user'}}
              enablesReturnKeyAutomatically
              returnKeyType="next"
              value={last_name}
              onChangeText={this.lastNameChangeHandler}
              onSubmitEditing={() => this.changeFocus(this.emailInputRef, 350)}
              blurOnSubmit={false}
              editable={editable}
            />
            <Input
              ref={(ref) => this.emailInputRef = ref}
              label={<Text>Email</Text>}
              placeholder='Email'
              leftIcon={{name: 'envelope-o', type: 'font-awesome'}}
              enablesReturnKeyAutomatically
              returnKeyType="done"
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              value={email}
              onChangeText={this.emailChangeHandler}
              onSubmitEditing={this.onSubmit}
              editable={editable}
            />
            <Button title="Update" loading={loading} onPress={this.onSubmit}/>
            <Link hint="" text="Change password here" onPress={() => {}}/>
          </View>
        </Container>
      </ScrollView>
    )
  }
}

Profile.propTypes = {}

Profile.defaultProps = {}


export default Profile