require('dotenv').config(); // Load .env variables

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
  firebase.initializeApp(firebaseConfig);
  


//Reference companies collection

var companiesRef = firebase.database().ref('companies');



// Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit Form
function submitForm(e){
    e.preventDefault();

//Get Values

var firstname = getInputVal('fname');
var lastname = getInputVal('lname');
var email = getInputVal('email');
var phone = getInputVal('phone');
var company = getInputVal('company');

// Save Company

saveCompany(firstname, lastname, email, phone, company);

// Show Alert

document.querySelector('.alert').style.display = 'block';

// Hide  alert after 5 seconds
setTimeout(function(){

document.querySelector('.alert').style.display = 'none';

},5000);

// Clear form
document.getElementById('contactForm').reset();


}

// Function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save companies to firebase
function saveCompany(firstname, lastname, company, email, phone){
    var newCompanyRef = companiesRef.push();
    newCompanyRef.set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        company:company
    });
}