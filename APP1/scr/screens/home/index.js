import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Home extends React.Component{
  render() {
    return (
      <View>
        <Text style={ketik.tulis}>Selamt Anda Telah Berasil Masuk</Text>
      </View>
    );
  }
}
export default Home;

let ketik = StyleSheet.create({
  tulis: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 35,
  },
});
