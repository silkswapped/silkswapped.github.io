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

const storageService = firebase.storage();
const storageRef = storageService.ref();

document.querySelector('.swap-submit').addEventListener('click', submitToFirebaseOverlord);
document.querySelector('.email-submit-inline').addEventListener('click', quicklySubmitToOverlord);

document.querySelector('.email-submit').addEventListener('change', handleEmailType);
document.querySelector('.email-inline').addEventListener('change', handleEmailType);

let emailAddy;

function handleEmailType(e) {
    emailAddy = e.target.value;
    console.log(emailAddy);
}

function quicklySubmitToOverlord(e) {

  if (emailAddy === undefined) {
    console.log("nope on email");
    return;
  }

  const form = document.querySelector('.email-inline')
  const submitButton = document.querySelector('.email-submit-inline')
  const thanku = document.querySelector('.thank-you-text-inline')

  form.value = ''
  form.style.display = "none";
  submitButton.style.display = "none";

  thanku.style.display = "initial";

  analytics.track('Signed Up', {
      handle: emailAddy
  });

  let selectedFile;

  const newChildRef = dataRef.child('users').push()

  newChildRef.set({
      contact:emailAddy
  });


}

function submitToFirebaseOverlord(e) {

  if (emailAddy === undefined) {
    console.log("nope on email");
    return;
  }

  const form = document.querySelector('.email-submit')
  const submitButton = document.querySelector('.swap-submit')
  const thanku = document.querySelector('.thank-you-text')

  const bottomRow = document.querySelector('.bottom-row')
  const topRow = document.querySelector('.top-row')

  form.value = ''
  form.style.display = "none";
  submitButton.style.display = "none";

  topRow.style.opacity = "0";
  bottomRow.style.opacity = "0";

  thanku.style.display = "initial";

  analytics.track('Signed Up', {
      handle: emailAddy
  });

  let selectedFile;

  const newChildRef = dataRef.child('users').push()

  newChildRef.set({
      contact:emailAddy
  });

}
