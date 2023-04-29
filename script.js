/*
WEB4C3WAP - ASSESSMENT TWO
File: script.js
Developed by Bailey CAMP on 29/04/2023
*/

function validateErrors(formField, errorField)
{
    //create a variable for the form field
    theField = document.getElementById(formField);
    //create a variable for the error field
    theError = document.getElementById(errorField);
    //create a new pattern by reading in pattern from HTML and adding delimiters
    var thePattern= new RegExp("^"+theField.pattern+"$");
    //test data in field against regex pattern from HTML
    if(!thePattern.test(theField.value)) {
        //sets field background to red
        theField.style.background ='#FF9999';
        //displays the <span> containing the error msg
        theError.style.display = "block";
        //displays the error message by reading the HTML title and writing it to the
        //span
        theError.innerHTML= theField.title;
        //set focus to field
        theField.focus();
        return false;
    }
    else
    {
        theField.style.background ='#CCFFCC';
        //sets field background to green
        theError.style.display = "none";
        //removes error message
        return true;
    }
}

function changeState() {
    // store a reference to country and state select lists
    var country = document.getElementById('country').value;
    var state = document.getElementById('state');
    
    // if country selected is Australia
    // populate state select list with Australian states
    if(country === 'AU') {
        state.innerHTML = '';
        
        state.options[state.options.length] = new Option('Select state','0');
        state.options[state.options.length] = new Option('South Australia', 'SA');
        state.options[state.options.length] = new Option('New South Wales', 'NSW');
        state.options[state.options.length] = new Option('Victoria', 'VIC');
        state.options[state.options.length] = new Option('Queensland', 'QLD');
        state.options[state.options.length] = new Option('Tasmania', 'TAS');
        state.options[state.options.length] = new Option('Western Australia','WA');
        state.options[state.options.length] = new Option('Australian Capital Territory', 'ACT');
        state.options[state.options.length] = new Option('Northern Territory','NT');
    }

    // if country selected is New Zealand
    // populate state select list with New Zealand regions
    if(country === 'NZ') {
        state.innerHTML = '';
        
        state.options[state.options.length] = new Option('Select state','0');
        state.options[state.options.length] = new Option('Northland', 'NTH');
        state.options[state.options.length] = new Option('Auckland', 'ACK');
        state.options[state.options.length] = new Option('Waikato', 'WAI');
        state.options[state.options.length] = new Option('Bay of Plenty', 'BOP');
        state.options[state.options.length] = new Option('Gisbourne', 'GIS');
        state.options[state.options.length] = new Option("Hawke's Bay", 'HWB');
        state.options[state.options.length] = new Option('Taranaki', 'TAR');
        state.options[state.options.length] = new Option('Manawatū-Whanganui','MAW');
        state.options[state.options.length] = new Option('Wellington', 'WEL');
        state.options[state.options.length] = new Option('Tasman','TSM');
        state.options[state.options.length] = new Option('Nelson', 'NEL');
        state.options[state.options.length] = new Option('Marlborough', 'MAR');
        state.options[state.options.length] = new Option('West Coast','WCO');
        state.options[state.options.length] = new Option('Canterbury', 'CAN');
        state.options[state.options.length] = new Option('Otago','OTA');
        state.options[state.options.length] = new Option('Southland', 'STH');
    }
}

function validateForm() {
    // Declares the variables from the HTML document needed in calculating logic and error
    var username = document.getElementById("pcode");
    var password = document.getElementById("email");
    var name = document.getElementById("creditcard");
    var address = document.getElementById("cardnum");
    var suburb = document.getElementById("cvc");
    var city = document.getElementById("cardexpm");
    var country = document.getElementById("cardexpy");
    var state = document.getElementById("fnameerr");
    var pcode = document.getElementById("lnameerr");
    var email = document.getElementById("pcodeerr");
    var phone = document.getElementById("emailerr");
    var website = document.getElementById("crediterr");
    var age = document.getElementById("cardnumerr");
    var color = document.getElementById("cvcerr");
    fnameerr.innerHTML = "";
    lnameerr.innerHTML = "";
    emailerr.innerHTML = "";
    pcodeerr.innerHTML = "";
    crediterr.innerHTML = "";
    cardnumerr.innerHTML = "";
    cvcerr.innerHTML = "";
    experr.innerHTML = "";
    var cmonth = "0" + month.getMonth();
    

    // Checks if the first and last name fields are empty
    if (fname.value=="") {
        fnameerr.style.color="red";
        fnameerr.innerHTML = "First name is required";
        fname.focus();
        return false;
    }
    if (lname.value=="") {
        lnameerr.style.color="red";
        lnameerr.innerHTML = "Last name is required";
        lname.focus();
        return false;
    }
    
    // Checks if the postcode is four characters and it is a number
    if (pcode.value.length == 4) {
        if (isNaN(pcode.value)) {
            pcodeerr.style.color="red";
            pcodeerr.innerHTML = "Postcode is not a number";
            pcode.focus();
            return false;
        }
    } else {
        pcodeerr.style.color="red";
        pcodeerr.innerHTML = "Postcode is required";
        pcode.focus();
        return false;
    }

    // Checks if the email is longer than eight characters and it includes @ and . symbols
    if (email.value.length<8) {
        emailerr.style.color="red";
        emailerr.innerHTML = "Email is less than 8 characters";
        email.focus();
        return false;
    } else {
        if (email. value.indexOf("@")==-1) {
            if (email.value.indexOf(".")==-1) {
                emailerr.style.color="red";
                emailerr.innerHTML = "Email is invalid.";
                email.focus();
                return false;
            }
        }
    }

    // Checks if the credit card type is not selected
    if (creditcard.value=="unselected") {
        crediterr.style.color="red";
        crediterr.innerHTML = "You didn't select a card.";
        creditcard.focus();
        return false;
    }
    
    // Checks if the credit card number is sixteen characters and it is a number
    if (cardnum.value.length == 16) {
        if (isNaN(cardnum.value)) {
            cardnumerr.style.color="red";
            cardnumerr.innerHTML = "Card number is invalid";
            cardnum.focus();
            return false;
        }
    } else {
        cardnumerr.style.color="red";
        cardnumerr.innerHTML = "Card number is required";
        cardnum.focus();
        return false;
    }

    // Checks if the CVC is three characters and it is a number
    if (cvc.value.length == 3) {
        if (isNaN(cvc.value)) {
            cvcerr.style.color="red";
            cvcerr.innerHTML = "CVC is invalid";
            cvc.focus();
            return false;
        }
    } else {
        cvcerr.style.color="red";
        cvcerr.innerHTML = "CVC is required";
        cvc.focus();
        return false;
    }

    // Checks if the card expiry month and year are before the current time
    if (cardexpm.value=="MM") {
        experr.style.color="red";
        experr.innerHTML = "Card expiry month is empty";
        cardexpm.focus();
        
        return false;
    } else {
        if (cardexpy.value < cmonth) {
            experr.style.color="red";
            experr.innerHTML = "Card has expired.";
            cardexpm.focus();
        }
    }
    if (cardexpy.value=="YYYY") {
        experr.style.color="red";
        experr.innerHTML = "Card expiry year is empty";
        cardexpy.focus();
        return false;
    } else {
        if (cardexpy.value == cyear.getFullYear()) {
            experr.style.color="red";
            experr.innerHTML = "Card has expired.";
            cardexpy.focus();
        }
    }

    // Alerts the user that their submission was correct.
    alert("Thank you for your submission.")
    return true;
}
    
    