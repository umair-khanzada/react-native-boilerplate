import {StyleSheet} from "react-native";
import THEME_CONFIG from './themeConfig';

export default StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  logo: {
    marginVertical: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnPrimary: {
    height: 60,
    elevation: 2,
    borderRadius: THEME_CONFIG.buttonBorderRadius,
    marginBottom: THEME_CONFIG.gapeBetweenElement,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME_CONFIG.primaryColor
  },
  btnPrimaryText: {
    fontSize: THEME_CONFIG.headingFontSize,
    color: THEME_CONFIG.primaryTextColor,
    fontFamily: THEME_CONFIG.primaryFontFamilyBold
  },
  labelStyle: {
    fontFamily: THEME_CONFIG.primaryFontFamilyBold,
    fontSize: THEME_CONFIG.fontSize
  },
  inputStyle: {
    fontFamily: THEME_CONFIG.primaryFontFamily,
    paddingHorizontal: 10,
    borderRadius: THEME_CONFIG.inputBorderRadius
  },
  containerStyle: {
    paddingHorizontal: 0,
    borderBottomWidth: 0
  },
  inputContainerStyle: {
    borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: THEME_CONFIG.primaryColor,
    marginBottom: THEME_CONFIG.gapeBetweenElement,
  },
  errorStyle: {
    marginHorizontal: 0,
    marginTop: -10,
    fontFamily: THEME_CONFIG.primaryFontFamily
  },
  checkboxContainer: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
    marginVertical:0,
    marginLeft: 0,
    marginRight: 0
  },
  disableStyle: {
    opacity: 0.5
  }
});
