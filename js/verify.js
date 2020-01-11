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

const url = new URL(window.location.href);
const session_id = url.searchParams.get("session_id");
const garment = url.searchParams.get("garment");

const ref = dataRef.child('customer-ids');

ref.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        if (session_id != null && session_id == childData) {
            document.querySelector('.success').style.display = "flex";
        }
    });
});

let selectedFile;
let emailAddy;

document.querySelector('.file-select').addEventListener('change', handleFileUploadChange);
document.querySelector('.email-submit').addEventListener('change', handleEmailType);
document.querySelector('.swap-submit').addEventListener('click', submitToFirebaseOverlord);

analytics.track(garment + "_Upload_Opened", {

});

function handleEmailType(e) {
    emailAddy = e.target.value;
    console.log(emailAddy);
}

function handleFileUploadChange(e) {
    selectedFile = e.target.files[0];
}

function submitToFirebaseOverlord(e) {
  if (emailAddy === undefined) {
    console.log("nope on email");
    return;
  }

  if (selectedFile === undefined) {
    console.log("nope on picture");
    return;
  }

  analytics.track(garment + "_Uploaded", {

  });


  const uploadTask = storageRef.child(`web_swaps/${emailAddy}_${garment}.jpg`).put(selectedFile); //create a child directory called images, and place the file inside this directory
  uploadTask.on('state_changed', (snapshot) => {
  // Observe state change events such as progress, pause, and resume
  }, (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, () => {
     // Do something once upload is complete
     console.log('success');
  });
}
