import { StyleSheet, Platform } from 'react-native';

export const colors = {
  flatWhite: '#F5F2F9',
  flatRed: '#FA3256',
  flatBlack: '#444444',
  flatGreen: '#39BD98',
  flatBlue: '#3498db',
  white: '#FFFFFF',
  smokeWhite: '#E4E2E5',
};

export default StyleSheet.create({
    TabIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        position: 'relative',
    },
    icon: {
        height: 25,
        width: 25,
        tintColor: (Platform.OS === 'android') ? colors.white : colors.flatBlack,
    },
    selectedIcon: {
        height: 25,
        width: 25,
        tintColor: (Platform.OS === 'android') ? colors.white : colors.flatBlue,
    },
    selectedAndoidTab: {
        flex: 1,
        right: 0,
        bottom: 0,
        left: 0,
        borderBottomWidth: 3,
        position: 'absolute',
        borderColor: colors.white,
    },
    iOSTabBarStyle: {
        borderTopWidth: .5,
        borderColor: colors.smokeWhite,
        backgroundColor: colors.white,
        opacity: 1,
    },
    androidtabBarStyle: {
        borderColor: colors.smokeWhite,
        backgroundColor: colors.flatBlue,
        opacity: 1,
        position: 'absolute',
        top: 0
    },
});
