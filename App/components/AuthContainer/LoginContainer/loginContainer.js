import React from 'react';
import { StyleSheet, View,Image,Text,TouchableOpacity,StatusBar} from 'react-native';


export default class LoginContainer extends React.Component {
  render() {
    return (
      <Image source={require('./../../../../Images/startupbg.png')} style={styles.container}>


      <StatusBar
         barStyle="light-content"

      />

       <Image

      source={require('./../../../../Images/Logo.png')}
         style={styles.logo} />

         <TouchableOpacity style={styles.signupbutton}>
         <Text style={styles.signupbuttontext} > SIGN UP WITH EMAIL</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.loginbutton}>
         <Text style={styles.loginbuttontext} >LOG IN</Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={styles.text} >Skip for now</Text>
         </TouchableOpacity>

         <Image

        source={require('./../../../../Images/socialmedialogin2.png')}
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


},

text: {
backgroundColor:'transparent',
color:'#fff',
fontSize:6,
padding:10,


},
socialmedialogin:{
  position: 'absolute',
  bottom:20,
  width: 160,
  height: 125,

},
signupbutton:{
   borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor:'transparent',
    marginTop:50,


},
signupbuttontext:{
    fontSize:6,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:4,
    paddingBottom:4,

},

loginbutton:{
   borderRadius: 8,
   borderWidth: 1,
   borderColor: '#fff',
backgroundColor:'transparent',
   marginTop:10,


},
loginbuttontext:{
  fontSize:6,
  paddingLeft:38,
  paddingRight:38,
  paddingTop:4,
  paddingBottom:4,


}

});
