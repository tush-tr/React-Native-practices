import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button,SafeAreaView } from 'react-native';
export default ({fetch,text,onChangeText}) => {
  return (
    <SafeAreaView>
      <TextInput onChangeText={onChangeText}
        value={text} style={styles.input} placeholder='Enter your city name' />
      <Button onPress={fetch(text)} title='Check Temperature' />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input:{
    padding:15,
    borderWidth: 2,
    borderStyle: 'solid',
    marginBottom:5,
    marginTop:5
  }
})