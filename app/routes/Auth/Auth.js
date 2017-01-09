import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import Button from '../../components/Button';
import styles from './styles';
import images from '../../config/images';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    render() {
        const { login, connected } = this.props;
        return (
            <View style={styles.default.container}>
                <Text>{ connected ? 'Connected' : 'Disconnect' } </Text>
                <Button onPress={login} text={"Connect with Google"} icon={images.icons.google} customStyle={styles.customSignIn} />
            </View>
        );
    }
}

export default Auth;
