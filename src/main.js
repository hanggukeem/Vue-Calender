import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(vueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCopBudcQ3IM0LQs-JSgbUmgBIQrxg9C2E",
  authDomain: "vue-calendar-33a6a.firebaseapp.com",
  databaseURL: "https://vue-calendar-33a6a.firebaseio.com",
  projectId: "vue-calendar-33a6a",
  storageBucket: "vue-calendar-33a6a.appspot.com",
  messagingSenderId: "229576544342",
  appId: "1:229576544342:web:520124ef605bfc71112bf7"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
