import React from 'react';
import { StyleSheet, View,Image,Text,TouchableOpacity,TextInput,KeyboardAvoidingView,StatusBar} from 'react-native';


export default class ForgotPasswordContainer extends React.Component {
  render() {
    return (
      <Image source={require('./../../../../Images/forgotpasswordbg.png')} style={styles.container}>

      <StatusBar
         barStyle="light-content"

      />

       <Image

      source={require('./../../../../Images/Logo.png')}
         style={styles.logo} />
<KeyboardAvoidingView  behavior="padding">

<Text style={styles.text} >Reset your password </Text>


         <TextInput
         placeholder="Username or Email"
         placeholderTextColor="rgba(255,255,255,0.7)"
         returnKeyType="go"
         autoCapitalize="none"
         autoCorrect={false}
         style={styles.input}
         />

         <TouchableOpacity style={styles.loginbutton}>
         <Text style={styles.loginbuttontext} >SEND LOGIN LINK</Text>
         </TouchableOpacity>

         <TouchableOpacity>
         <Text style={styles.textback} >Back to Login</Text>
         </TouchableOpacity>

   </KeyboardAvoidingView>
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
fontSize:10,
padding:10,
paddingLeft:0,
textAlign:'left',
paddingTop:0,

},

textback:{
  backgroundColor:'transparent',
  color:'#fff',
  fontSize:8,
  textAlign:'center',
  paddingTop:10,


},
input:{

   color:'#fff',
  fontSize:8,
marginTop:15,
marginBottom:10,
borderBottomWidth: 1,
borderBottomColor: '#fff',
paddingRight:40,
textAlign:'left',

},


loginbutton:{

   backgroundColor:'rgb(243,180,137)',
   paddingHorizontal:40,
   paddingVertical:5,


},
loginbuttontext:{
  fontSize:8,
  paddingLeft:38,
  paddingRight:38,
  paddingTop:4,
  paddingBottom:4,
  fontWeight:"700",
  color:'#fff',

},
});
