import React from 'react';
import {View, Text, Button} from 'react-native';

class BelajarState extends React.Component {
  
  state = {
    perTambahan: 1,
    nama: '',
    panjang: 22,
    lebar: 15,
    luas: '',
  };

  klik = () => {
    // var tambahSatu = this.state."nama+Rais";
    var tambah = this.state.perTambahan + 1;
    var hasilHitung = this.state.panjang * this.state.lebar;
    this.setState({perTambahan: tambah});
    this.setState({nama: ' Rais'});
    this.setState({luas: hasilHitung});
  };

  render() {
    return (
      <View>
        <Text>Hitung Las PERSEGI PANJANG</Text>
        <Text>Panjang :{this.state.panjang} cm</Text>
        <Text>Lebar :{this.state.lebar} cm</Text>
        <Text>Luas :{this.state.luas} cm</Text>
        <Text>Hallo{this.state.nama}</Text>
        <Text>Per Tambahan Satu :{this.state.perTambahan}</Text>
        <Button
          title="ubah Nama"
          color="deepskyblue"
          onPress={() => this.klik()}
        />
      </View>
    );
  }
}
export default BelajarState;
