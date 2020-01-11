// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "hide",
  authDomain: "silkswap-app-27aa2.firebaseapp.com",
  databaseURL: "https://silkswap-app-27aa2.firebaseio.com",
  projectId: "silkswap-app-27aa2",
  storageBucket: "silkswap-app-27aa2.appspot.com",
  messagingSenderId: "549489890201",
  appId: "1:549489890201:web:97433b6c77ef3098"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storageService = firebase.storage();
const storageRef = storageService.ref();

var garmentButtons = document.querySelectorAll('.garment-select-button');
for (var i = 0; i < garmentButtons.length; i++) {
    garmentButtons[i].addEventListener('click', getDesiredCloth);
}

document.querySelector('.file-select').addEventListener('change', handleFileUploadChange);
document.querySelector('.email-submit').addEventListener('change', handleEmailType);

document.querySelector('.swap-submit').addEventListener('click', submitToFirebaseOverlord);

let selectedFile;
let emailAddy;
let target_cloth;

function getDesiredCloth(e) {
  target_cloth = e.target.id;
  console.log(target_cloth);
}

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

  const uploadTask = storageRef.child(`web_swaps/${emailAddy}_${target_cloth}.jpg`).put(selectedFile); //create a child directory called images, and place the file inside this directory
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
