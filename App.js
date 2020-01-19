import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
//import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha pata é linda!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'blue',
    fontWeight: 'bold',
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#FFF',
  }
});
*/