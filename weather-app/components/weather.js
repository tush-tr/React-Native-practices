import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';
export default ({ temp, desc, icon }) => {
  return (
    <View>
      <Text style={styles.temp}>
        Temperature in your City is {temp} degrees
      </Text>
      <Text>{desc}</Text>
      <Image
        style={styles.tinyLogo}
        source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  temp: {
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
