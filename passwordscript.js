

// On click refresh page to show several input fields that show different criteria for generating a password
// Validate that a character type has been selected
// On click "Generate Password" output mashes the selected criteria is given in a display field at the bottom of the form. 


// query select length of password

    let passwordLength = document.querySelector(".numberSelect");

// query select Uppercase
    let uppercase = document.querySelector("#uppercase");
// query select Lowercase
    let lowercase = document.querySelector("#lowercase");
// query select Special Characters
    let characters = document.querySelector("#characters");
// query select numbers
    let numbers = document.querySelector("#numbers");

// query select password display
    let finalPass = document.querySelector("#finalPass");

// query select generate password
    let button = document.querySelector("#generate");




// create array for uppercase Alphabet
    let uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// create array for lowercase alphabet
    let lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// create array for special characters
    let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-","+"];
// create array for numbers
    let numberArray = []




// create for loop for numbers 

for (let i= 0; i<= 9; i++) {
    numberArray.push(i);
}

// create function for password length being out of bounds
button.addEventListener("click", function() {
   if (passwordLength["value"] < 8 || passwordLength["value"] >128) {
       alert("Whoops! Please choose a number that is between 8-128");
       return;
   } 

 // create array for total options selected  
    let optionsSelect = [];

    if (lowercase["checked"]) {
        lowercaseChar.forEach(function(c){
            optionsSelect.push(c);
        });
    }

    if (uppercase["checked"]) {
        uppercaseChar.forEach(function(c) {
            optionsSelect.push(c);
        });
    }

    
    if (characters["checked"]) {
        specialChar.forEach(function(c){
            optionsSelect.push(c);
        });
    }

// include data validation to see if Special Characters is selected.
    if (characters["checked"] !=true) {
        alert ("You must select Special Characters");
        return;
    }

    if (numbers["checked"]) {
        numberArray.forEach(function(c){
            optionsSelect.push(c);
        })
    }

// include validation to see if any of the criteria has been selected
    if (optionsSelect.length==0) {
        alert("Whoops! It looks like you have not selected any criteria for your password. Check yourself before you wreck yourself. Pun intended.");
        return;
    }

 

// create for loop for password
    let finalPassText = "";

    for (let i=0; i<passwordLength["value"]; i++) {
        finalPassText += optionsSelect[Math.floor(Math.random() * optionsSelect.length)];
        
    }

    
    finalPass["value"]=finalPassText;

});



