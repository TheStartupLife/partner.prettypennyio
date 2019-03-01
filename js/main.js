// Initialize Firebase
var config = {
    apiKey: "AIzaSyCKEJ9xzcuSE8P5ZfQxTOqm89Vsb6zDqQE",
    authDomain: "prettypennylanding.firebaseapp.com",
    databaseURL: "https://prettypennylanding.firebaseio.com",
    projectId: "prettypennylanding",
    storageBucket: "prettypennylanding.appspot.com",
    messagingSenderId: "198086476877"
  };
  firebase.initializeApp(config);


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