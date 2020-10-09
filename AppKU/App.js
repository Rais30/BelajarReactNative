import React from 'react';
import {View, Text} from 'react-native';
import {TextCustom} from './props';
import {ButtonCostem} from './button2';

class App extends React.Component {
  tekan = () => {
    alert('terima kasih');
  };
  render() {
    return (
      <View>
        <Text style={{fontSize: 18}}>Hallo Rais</Text>

        <TextCustom title="Hai Dunia" color="red" />
        <TextCustom title="Selamat" color="blue" />
        <TextCustom title="terima kasih" color="green" />
        <TextCustom title="hallo" />
        <TextCustom title="pagi" />

        <ButtonCostem
          title="tekan di sini"
          color="#218325"
          onPress={() => this.tekan()}
        />
        <ButtonCostem
          title="kili x1"
          color="#334455"
          onPress={() => this.tekan()}
        />
        <ButtonCostem
          title="klik di sini"
          color="#098077"
          onPress={() => this.tekan()}
        />
        <ButtonCostem
          title="kili aja"
          color="#534195"
          onPress={() => this.tekan()}
        />
        <ButtonCostem
          title="apa saja"
          color="#539954"
          onPress={() => this.tekan()}
        />
      </View>
    );
  }
}

export default App;
