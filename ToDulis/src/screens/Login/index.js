import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableNativeFeedback,
} from 'react-native';

class Login extends React.Component {
  
  state = {
    visible: true,
    username: '',
    password: '',
    usernameDefauld: 'RaisAzaria',
    passwordDefauld: '12345678',
  };
  lihat = () => {
    this.setState({visible: !this.state.visible});
  };
  masuk = () => {
    // this.setState({username: this.state.usernameDefauld});
    // this.setState({password: this.state.passwordDefauld});
    if (
      this.setState({username: this.state.usernameDefauld}) &&
      this.setState({password: this.state.passwordDefauld})
    ) {
      alert('selamat datang');
    } else {
      alert('maaf Email atau password yang anda masukan salah');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Facebook</Text>
        </View>
        <View style={styles.boxInput}>
          <TextInput
            placeholder="Email or Phone"
            style={styles.input}
            value={this.state.username}
            onChangeText={(teks) => this.setState({username:teks})}
          />
        </View>
        <View style={styles.boxInput}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={this.state.visible}
            value={this.state.password}
            onChangeText={(teks) => this.setState({password: teks})}
          />
        </View>
        <Button title="Log In" onPress={() => this.masuk()} />
        <TouchableNativeFeedback>
          <View
            style={{
              height: 50,
              width: 150,
              justifyContent: 'center',
              elevation: 10,
              alignItems: 'center',
              backgroundColor: 'red',
              borderRadius:10,
            }}>
            <Text onPress={()=>this.lihat()}>Klik</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#017dbc',
    flex: 1,
  },
  header: {
    height: '30%',
    width: '100%',
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    // fontWeight: 'bold',
    // textDecorationLine: 'underline',
  },
  boxInput: {
    width: '100%',
    // backgroundColor:'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    height: 50,
    width: '80%',
    backgroundColor: '#eaf6ce',
    lineHeight: 10,
  },
});
