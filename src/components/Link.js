import React from 'react';
import PropTypes from 'prop-types';
import {Text, View,TouchableOpacity, StyleSheet} from 'react-native';
import {theme} from "../style";
import THEME_CONFIG from "../style/themeConfig";

const style = StyleSheet.create({
  linkParent: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  link: {
    color: THEME_CONFIG.primaryColor,
    marginLeft: 5,
    marginBottom: THEME_CONFIG.gapeBetweenElement
  }
});

const Link = ({hint, text, onPress}) => (
  <View style={style.linkParent}>
    <Text style={theme.labelStyle}>{hint}</Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={[theme.labelStyle, style.link]}>{text}</Text>
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