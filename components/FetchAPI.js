import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Weather from './weather';
import Form from './Form';
import { Card } from 'react-native-paper';

export default function FetchAPI() {
  const [weather, setWeather] = useState('');
  const [text, onChangeText] = React.useState('');
  const fetchWeather = (text) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=b2b8f013cb2d1da62f710e50287d5e7d&units=metric`;
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setWeather({
          temp: data.main.temp,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <Form fetch={fetchWeather} text={text} onChangeText={onChangeText} />
      <Card>
      {text === '' ? (
        ''
      ) : (
        <Weather temp={weather.temp} desc={weather.desc} icon={weather.icon} />
      )}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
