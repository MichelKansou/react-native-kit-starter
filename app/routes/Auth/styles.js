import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

const defaultStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.flatWhite,
    },
});

const customSignIn = StyleSheet.create ({
    button: {
        backgroundColor: colors.white,
        width: 212,
        height: 48,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    buttonIcon: {
        position: 'relative',
        marginRight: 5,
        height: 30,
        width: 30,
    }
});

module.exports = {default: defaultStyle, customSignIn: customSignIn};
