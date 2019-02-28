// Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

//Get Values

var firstname = getInputVal('fname');
var lastname = getInputVal('lname');
var email = getInputVal('email');
var phone = getInputVal('phone');
var company = getInputVal('company');

console.log(firstname);

}

// Function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}