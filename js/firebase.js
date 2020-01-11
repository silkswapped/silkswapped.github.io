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

const url = new URL(window.location.href);
const session_id = url.searchParams.get("session_id");
const garment = url.searchParams.get("garment");

const ref = dataRef.child('customer-ids');

analytics.track(garment + "_Bought", {

});

ref.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        if (session_id != null && session_id == childData) {
            const target_url = "https://silkswap.com/pages/upload-photo.html?session_id=" + session_id + "&garment=" + garment;
            const link = document.querySelector('.photo-link-text');
            link.innerHTML = "Upload your photo<br>or<br>Copy link: " + target_url;

            const a_tag = document.querySelector('.photo-link');
            a_tag.setAttribute("href", target_url);
        }
        console.log(childData);
    });
});
