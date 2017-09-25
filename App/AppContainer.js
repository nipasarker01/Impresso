import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './scenes/splashScene';
import AuthContainer from './components/AuthContainer/AuthContainer';
import LoginContainer from './components/AuthContainer/LoginContainer/loginContainer';


export default class App extends React.Component {
  render() {
    return (
      <SplashScreen>

    <AuthContainer>

  

    </AuthContainer>

     </SplashScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
}
});
