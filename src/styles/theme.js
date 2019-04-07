import {THEME_CONFIG} from './index';

export default {
  colors: {
    primary: THEME_CONFIG.PRIMARY_COLOR,
    secondary: THEME_CONFIG.SECONDARY_COLOR
  },

  Button: {
    buttonStyle: [
      {
        height: 60,
        elevation: 2,   // Set elevation 0 when used type outline button.
        borderRadius: 0,
        marginBottom: THEME_CONFIG.GAPE_BETWEEN_ELEMENTS,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 2,  // Set borderWidth when used type outline button.
      }
    ],
    titleStyle: [
      {
        fontSize: 16,
        fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY
      }
    ],
  },
  Input: {
    containerStyle: [
      {
        paddingHorizontal: 0,
        borderBottomWidth: 0
      }
    ],
    inputContainerStyle: [
      {
        borderWidth: 2,
        borderBottomWidth: 2,
        borderColor: THEME_CONFIG.PRIMARY_COLOR,
        marginBottom: THEME_CONFIG.GAPE_BETWEEN_ELEMENTS,
      }
    ],
    inputStyle: [
      {
        fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY,
        paddingHorizontal: 10,
        borderRadius: 0,
        fontSize: 16
      }
    ],
    errorStyle: [
      {
        marginHorizontal: 0,
        marginTop: -10,
        fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY
      }
    ],
  },
  Icon: {
    color: THEME_CONFIG.PRIMARY_COLOR,
    size: THEME_CONFIG.ICON_SIZE,
    type: 'antdesign'
  },
  CheckBox: {
    iconType: 'antdesign',
    checkedIcon: 'checksquare',
    uncheckedIcon: 'closesquare',
    checkedColor: THEME_CONFIG.PRIMARY_COLOR,
    containerStyle: [
      {
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderWidth: 0,
        backgroundColor: 'transparent',
        marginVertical:0,
        marginLeft: 0,
        marginRight: 0
      }
    ]
  },
  Text: {
    style: [
      {
        fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY
      }
    ],
    h4Style: [
      {
        fontFamily: THEME_CONFIG.PRIMARY_FONT_FAMILY,
        fontSize: 20
      }
    ]
  }
};