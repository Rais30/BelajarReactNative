import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/index';
import Login from '../screens/login/index';
import Splash from '../screens/splash/index';

let tujuan = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <tujuan.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <tujuan.Screen nama="logIn" component={Login} />
        <tujuan.Screen nama="Home" component={Home} />
        <tujuan.Screen nama="Splash"component={Splash} />
      </tujuan.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
