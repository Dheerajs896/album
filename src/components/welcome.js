import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>welcome React Native !!!</Text>
      </View>
    );
  }
}
sdsa
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

