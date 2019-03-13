import {StyleSheet} from "react-native";
import THEME_CONFIG from './themeConfig';

export default StyleSheet.create({
  backgroundImage: {
    height: 300,
    marginBottom: 30
  },
  profileImageSection: {
    height: 300,
    flexDirection: 'row'
  },
  profileNameSection: {
    flex: 2,
    justifyContent: 'flex-end'
  },
  name: {
    color: THEME_CONFIG.primaryColor,
    paddingVertical: 20,
    paddingHorizontal: 30,
    fontFamily: THEME_CONFIG.primaryFontFamilyBold,
    fontSize: THEME_CONFIG.headingFontSize
  },
  profileEditButtonSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  roundButton: {
    backgroundColor: THEME_CONFIG.primaryColor,
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 30,
    marginVertical: 10,
  }
});
