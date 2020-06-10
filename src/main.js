import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCfO96oOyPWHslftpyq4rPHdcP9I0ctMbI",
  authDomain: "test3-138e7.firebaseapp.com",
  databaseURL: "https://test3-138e7.firebaseio.com",
  projectId: "test3-138e7",
  storageBucket: "test3-138e7.appspot.com",
  messagingSenderId: "88081011731",
  appId: "1:88081011731:web:0677de012f60988c125be6",
  measurementId: "G-P5M35M23TB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
