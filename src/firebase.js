import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCrJkfmp6X6xyO6fhocuYj4yzD4MfZx6qo",
  authDomain: "myfirebasechatapp-e43d9.firebaseapp.com",
  databaseURL: "https://myfirebasechatapp-e43d9.firebaseio.com",
  projectId: "myfirebasechatapp-e43d9",
  storageBucket: "myfirebasechatapp-e43d9.appspot.com",
  messagingSenderId: "754543377583",
  appId: "1:754543377583:web:d7c982240f6c00bdf1e85a",
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const messageRef = database.ref('messages')

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text })
}
