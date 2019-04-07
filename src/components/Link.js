import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import THEME_CONFIG from "../styles/themeConfig";

const style = StyleSheet.create({
  linkParent: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  link: {
    color: THEME_CONFIG.PRIMARY_COLOR,
    marginLeft: 5,
    marginBottom: THEME_CONFIG.GAPE_BETWEEN_ELEMENTS
  }
});

const Link = ({hint, text, onPress}) => (
  <View style={style.linkParent}>
    <Text>{hint}</Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={[style.link]}>{text}</Text>
    </TouchableOpacity>
  </View>
);

Link.propTypes = {
  hint: PropTypes.string,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

Link.defaultProps = {};

export default Link;