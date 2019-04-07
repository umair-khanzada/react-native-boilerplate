import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import Container from '../components/container';
import {theme} from '../styles';
import style from '../styles/home.style';

class Home extends Component{
  navigateToLogin = (route) => () => {
    this.props.navigation.navigate(route)
  };

  render () {
    return (
      <Container>
        <View style={[{flex: 2}, theme.logo]}>
          <Icon type="antdesign" name="setting" iconStyle={{color: '#000', fontSize: 200}} />
        </View>
        <View style={style.buttonsArea}>
          <Button title="Log In" onPress={this.navigateToLogin('Login')}/>
          <Button title="Register"/>
        </View>
      </Container>
    )
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;