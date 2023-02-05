const firebaseConfig = {
    apiKey: "AIzaSyArB5sXovqUyAgdHaLn54AtqqXd-7ULV94",
    authDomain: "catering-services-c4279.firebaseapp.com",
    databaseURL: "https://catering-services-c4279-default-rtdb.firebaseio.com",
    projectId: "catering-services-c4279",
    storageBucket: "catering-services-c4279.appspot.com",
    messagingSenderId: "661441177393",
    appId: "1:661441177393:web:c65aa37f1fb9e31b283210",
    measurementId: "G-5TKZ9PXW4H"
};


firebase.initializeApp(firebaseConfig);
var detailsDB = firebase.database().ref("details");

document.getElementById("details").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var msgContent = getElementVal("password");

  saveMessages(name, emailid, msgContent);

 
  document.querySelector(".alert").style.display = "block";

  
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  
  document.getElementById("details").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = detailsDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
