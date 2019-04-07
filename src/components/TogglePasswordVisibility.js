import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'react-native-elements'

const TogglePasswordVisibility = ({visible, onPressHandler, disabled}) => (
  <Icon
    name={visible ? 'eyeo' : 'eye'}
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