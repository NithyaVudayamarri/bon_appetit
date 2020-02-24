// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyCX-oPHwlu_uEhrNYTlU8ZcFDPaTKNJKOQ",
  authDomain: "gdp-app-dbb67.firebaseapp.com",
  databaseURL: "https://gdp-app-dbb67.firebaseio.com/",
  projectId: "gdp-app-dbb67",
  storageBucket: "gdp-app-dbb67.appspot.com",
  messagingSenderId: "483028094395",
  appId: "1:483028094395:web:05b54aa719d10231ef089e",
  measurementId: "G-67DHJ32WL0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById('paymentpage').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
}
