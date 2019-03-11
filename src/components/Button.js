import React  from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import {theme, THEME_CONFIG} from '../style';

const Button = ({containerStyle, ripple, textStyle, text, icon, touchableProps}) => {
  // const {style, background, ...props} = touchableProps; //removed style and background from touchable props and pass manually by containerStyle and ripple.
  return (
    <Touchable style={containerStyle} background={Touchable.Ripple(ripple)} {...touchableProps}>
      <View>
        {icon}
        <Text style={textStyle}>{text}</Text>
      </View>
    </Touchable>
  )
};

Button.propTypes = {
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  textStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  touchableProps: PropTypes.object,   // touchableProps supported props https://github.com/react-native-community/react-native-platform-touchable#props
  ripple: PropTypes.string            //color code or color name
};

Button.defaultProps = {
  textStyle: theme.btnPrimaryText,
  containerStyle: theme.btnPrimary,
  ripple: THEME_CONFIG.primaryRippleColor,
};

export default Button;