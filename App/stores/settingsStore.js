import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'
const config = {
    apiKey: "AIzaSyAWRkbpcgUZvX94b16MkYni19kkD18O_3M",
    authDomain: "dinder-e9d67.firebaseapp.com",
    databaseURL: "https://dinder-e9d67.firebaseio.com",
    storageBucket: "dinder-e9d67.appspot.com",
    messagingSenderId: "416874629484"
  }
export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config)
    super(firebase.database().ref())

    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  get LoginBG() {
    return this.loginBG
  }
  get SplashTime() {
    return this.splashTime
  }
  get SplashImg() {
    return this.splashImg
  }
}
