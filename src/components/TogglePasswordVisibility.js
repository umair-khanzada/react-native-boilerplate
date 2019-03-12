import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements'
import {THEME_CONFIG} from "../style";


const TogglePasswordVisibility = ({visible, onPressHandler, disabled}) => (
  <Icon
    name={visible ? 'eyeo' : 'eye'}
    type={'antdesign'}
    color={THEME_CONFIG.primaryColor}
    size={THEME_CONFIG.iconSize}
    iconStyle={{paddingHorizontal: 5, paddingVertical: 10}}
    onPress={onPressHandler}
    disabled={disabled}
    disabledStyle={{backgroundColor: 'transparent', opacity: 0.5}}
  />
);

TogglePasswordVisibility.propTypes = {
  visible: PropTypes.bool.isRequired,
  onPressHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

TogglePasswordVisibility.defaultProps = {};

export default TogglePasswordVisibility;