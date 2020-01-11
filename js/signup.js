// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "hide",
    authDomain: "silkswap-48055.firebaseapp.com",
    databaseURL: "https://silkswap-48055.firebaseio.com",
    projectId: "silkswap-48055",
    storageBucket: "silkswap-48055.appspot.com",
    messagingSenderId: "355544937461",
    appId: "1:355544937461:web:6e5ccf13c6b00449"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dataService = firebase.database();
const dataRef = dataService.ref();

let emailAddy;

function handleEmailType(e) {
    emailAddy = e.target.value;
    console.log(emailAddy);
}

document.querySelector('.join-beta-form-handle').addEventListener('change', handleEmailType);
document.querySelector('.join-beta-form-submit').addEventListener('click', submitToFirebaseOverlord);

function submitToFirebaseOverlord(e) {
  if (emailAddy === undefined) {
    console.log("nope on email");
    return;
  }

  const form = document.querySelector('.join-beta-form-handle')
  const submitButton = document.querySelector('.join-beta-form-submit')
  const thanku = document.querySelector('.thank-you-text')

  analytics.track("Beta_Signup", {

  });

  form.value = ''
  form.style.display = "none";
  submitButton.style.display = "none";

  thanku.style.display = "initial";

  const newChildRef = dataRef.child('users').push()

  newChildRef.set({
      contact:emailAddy
  });
}
