import {StyleSheet} from "react-native";
import THEME_CONFIG from './themeConfig';

export default StyleSheet.create({
  rememberMeParent: {
    flexDirection: 'row',
    marginBottom: THEME_CONFIG.gapeBetweenElement
  },
  rememberMe: {
    flex: 1
  },
  forgotPassword: {
    flex: 1,
    alignItems: 'flex-end'
  },
  or: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: THEME_CONFIG.gapeBetweenElement
  }
});
