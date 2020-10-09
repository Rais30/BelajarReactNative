import React from 'react';
import {
  View,
  Text,
  StylesSheet,
  TextInput,
  Button,
} from 'react-native';

class Login extends React.Component {
  data = {
    visible: true,
    user: '',
    pass: '',
    username: 'r',
    password: '12',
  };
  masuk = () => {
    if (
      this.data.user == this.data.username &&
      this.data.pass == this.data.password
    ) {
      this.props.navigation.replace('Home');
    } else {
      alert('Username atau Password yang anda masukan salah');
    }
  };
  lihat = () => {
    this.setState({visible: !this.data.visible});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>fecebook</Text>
        </View>
        <View style={styles.boxInput}>
          <TextInput
            style={{borderRadius:25}}
            placeholder="Username"
            style={styles.input}
            value={this.data.userr}
            onChangeText={teks => this.setState({username: teks})}
          />
        </View>
        <View style={styles.boxInput}>
            <TextInput
            style={{borderRadius:25}}
            placeholder="Password"
            style={styles.input}
            secureTextEntry={this.data.visible}
            value={this.data.pass}
            onChangeText={teks=>this.setState({password:teks})}/>
            <Text style={{borderRadius:20,}} onPress={()=>this.lihat()}>lihat</Text>
        </View>
        <Button title="Masuk" onPress={()=>this.masuk()}/>
        <View>
            <Text onPress={()=>this.props.navigation.replace('Home')}>Daftar</Text>
        </View>
      </View>
    );
  }
}
export default Login;
const styles = StylesSheet.create({
  container: {
    backgroundColor: '#17dbc',
    flex: 1,
  },
  header: {
    height: '30%',
    width: '80%',
    backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'canter',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  boxInput: {
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    width: '60%',
    lineHeight: 20,
  },
});
