import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/Header';
// You can import from local files
import FetchAPI from './components/FetchAPI';
import Form from './components/Form';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header />
      <FetchAPI />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
