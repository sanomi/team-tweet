let hot = "HOT";
console.log(`ES2015 is ${hot}`);
let authGuests = () => {
if (localStorage["firebase:session::team-tweeet"]) {
	return;
}

let ref = new Firebase("https://team-tweeet.firebaseio.com");
ref.authWithOAuthPopup("twitter", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    alert("Authenticated successfully with payload:", authData);
  }
});
};

authGuests();