import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Home = () =>  {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Home 2
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js Test
        </Text>
      </View>
    );
};

export default Home;
