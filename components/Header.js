import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
export default ()=>{
  return(
    <View>
    <Text style={styles.heading}>Simple Weather App</Text>
    </View>
  )
}
const style = {
  heading:{
  fontSize:20,
  fontWeight:'bold',
  textAlign:'center',
  backgroundColor: 'darkgoldenrod'
  }
}
const styles = StyleSheet.create(style)