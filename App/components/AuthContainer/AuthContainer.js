import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,

} from 'react-native';
import LoginmainContainer from './LoginContainer/loginmainContainer.js'
import OnboardingScene from './OnboardingScene/onboardingScene.js'
import ForgotPasswordContainer from './ForgotPasswordContainer/forgotpasswordContainer.js'
import RegisterContainer from './RegisterContainer/registerContainer.js'
import LoginContainer from './LoginContainer/loginContainer.js'

export default class AuthContainer extends React.Component {
 constructor(props){
    super(props);
  this.state = {

    isAuth:false,
  };
}

render() {
    return (
      !this.state.isAuth?
      //Not authneticated

//<LoginContainer />
<LoginmainContainer />
//<ForgotPasswordContainer />
//<RegisterContainer />




      :
     //Is Authenticated

      <OnboardingScene />

    );
  }
}
