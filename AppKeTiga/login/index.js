import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';

class Login extends React.Component {
  state = {
    hasil: true,
    userN: '',
    passW: '',
    UserName: 'A',
    PassWord: '1',
  };
  delok = () => {
    this.setState({hasil: !this.state.hasil});
  };
  mlebu = () => {
    if (
      this.state.userN == this.steta.UserName &&
      this.steta.passW == this.steta.PassWord
    ) {
      this.props.navigation.replace('Home');
    } else {
      alert('Username end Password fallid');
    }
  };

  render() {
    return (
      <View>
        <View>
          <Text
            style={{
              fontSize: 35,
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
            }}>
            LOGIN
          </Text>
          <View>
            <View>
              <TextInput
                placeholder="Username"
                value={this.steta.userN}
                onChangeText={(taks) => this.setState({user: taks})}
              />
            </View>
            <View>
            <TextInput
                placeholder="Password"
                secureTextEntry={this.steta.hasil}
                value={this.steta.passW}
                onChangeText={(taks) => this.setState({passW: taks})}
              />
            </View>
            <View>
                <TouchableNativeFeedback>
                  <View style={{
                    height:45,
                    width:'15%',
                    justifyContent:'center',
                    alignItems:'center',
                    elevation:15,
                  }}>
                    <Text  onPress={()=> this.delok()}>Lihat</Text>
                  </View>
                  <View>
                  <Text onPress={()=>this.mlebu()}>LOGIN</Text>
                  </View>
                </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Login;