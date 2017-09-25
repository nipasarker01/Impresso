import React from 'react';
import { StyleSheet, View,Image,Text,TouchableOpacity,TextInput,KeyboardAvoidingView,StatusBar,} from 'react-native';


export default class RegisterContainer extends React.Component {
  render() {
    return (

      <Image source={require('./../../../../Images/loginbg.png')} style={styles.container}>

      <StatusBar
         barStyle="light-content"

      />

      <TouchableOpacity style={styles.loginbutton}>
      <Text style={styles.loginbuttontext} >Login</Text>
      </TouchableOpacity>

       <Image

      source={require('./../../../../Images/Logo.png')}
         style={styles.logo} />

   <KeyboardAvoidingView behavior="padding">

         <TextInput
         placeholder="First Name"
         placeholderTextColor="rgba(255,255,255,0.7)"
         returnKeyType="next"
         style={styles.input}
         />

         <TextInput
         placeholder="Email"
         placeholderTextColor="rgba(255,255,255,0.7)"
         returnKeyType="next"
         onSubmitEditing={() => this.passwordInput.focus()}
         keyboardType="email-address"
         autoCapitalize="none"
         autoCorrect={false}
         style={styles.input}
         />

         <TextInput
         placeholder="Password"
         placeholderTextColor="rgba(255,255,255,0.7)"
         secureTextEntry
         returnKeyType="go"
         style={styles.input}
         ref={(input) => this.passwordInput = input}
         />


         <TouchableOpacity style={styles.signupbutton}>
         <Text style={styles.signupbuttontext} >SIGN UP</Text>
         </TouchableOpacity>

   </KeyboardAvoidingView>

         <Image

        source={require('./../../../../Images/SocialMediabuttons.png')}
           style={styles.socialmedialogin} />
       </Image>

    );
  }
}

const styles = StyleSheet.create({
   container: {

     flex: 1,
     height:null,
     width:null,
     alignItems: 'center',

},
logo: {
width: 160,
height: 103,
marginTop:100,
marginBottom:50,


},

text: {
backgroundColor:'transparent',
color:'#fff',
fontSize:6,
padding:10,
paddingLeft:0,
textAlign:'left',
paddingTop:0,
},

input:{
color:'#fff',
fontSize:8,
marginTop:15,
marginBottom:1,
borderBottomWidth: 1,
borderBottomColor: '#fff',
paddingRight:40,
textAlign:'left',




},
socialmedialogin:{
  position: 'absolute',
  bottom:20,
  width: 180,
  height: 30,

},


signupbutton:{

   backgroundColor:'rgb(162,205,231)',
   paddingHorizontal:40,
   paddingVertical:5,
   marginTop:10,

},
signupbuttontext:{
  fontSize:8,
  paddingLeft:38,
  paddingRight:38,
  paddingTop:4,
  paddingBottom:4,
  fontWeight:"700",
  color:'#fff',

},
loginbutton:{

   backgroundColor:'transparent',
   position:'absolute',
   top:30,
   right:20,
},
loginbuttontext:{
  fontSize:8,
  fontWeight:"700",
  color:'#fff',

},


});
