import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import Button from '../../components/Button';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { logout, connected } = this.props;
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <Text>{ connected ? 'Connected' : 'Disconnect' } </Text>
              <Button onPress={logout} text={"Disconnect"} />
              <Text style={styles.instructions}>
                To get started, edit index.ios.js Test
              </Text>
            </View>
        );
    }
}

export default Home;
