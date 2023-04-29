/*
WEB4C3WAP - ASSESSMENT TWO
File: script.js
Developed by Bailey CAMP on 29/04/2023
*/

var myInterval = setInterval(saveData, 5000);

var checkColor = "#FF9999";

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
        //displays the error message by reading the HTML title and writing it to the <span>
        theError.innerHTML = theField.title;
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

/*
function saveData(){  
    var username = document.querySelector("#username").value;   
    var name = document.querySelector("#name").value
    var address = document.querySelector("#address").value;  
    var suburb = document.querySelector("#suburb").value;  
    var city = document.querySelector("#city").value;  
    var country = document.querySelector("#country").value;  
    var state = document.querySelector("#state").value; 
    var website = document.querySelector("#email").value; 
    var phone = document.querySelector("#phone").value;      
    var email = document.querySelector("#website").value;
    var age = document.querySelector("#age").value;        
    localStorage.setItem('username', username);
    localStorage.setItem('name', name);     
    localStorage.setItem('address', address)
    localStorage.setItem('suburb', suburb);  
    localStorage.setItem('email', email);  
    localStorage.setItem('city', city)
    localStorage.setItem('country', country);  
    localStorage.setItem('state', state);  
    localStorage.setItem('phone', phone)
    localStorage.setItem('website', website);  
    localStorage.setItem('age', age);  
}

function retrieveData(){      
    var username = localStorage.getItem("username");
    var name = localStorage.getItem("name");
    var address = localStorage.getItem("address");
    var suburb = localStorage.getItem("suburb");
    var city = localStorage.getItem("city");
    var country = localStorage.getItem("country");
    var state = localStorage.getItem("state");
    var phone = localStorage.getItem("phone");
    var website = localStorage.getItem("website");
    var age = localStorage.getItem("age");
    document.querySelector("#username").value = username;   
    document.querySelector("#name").value = name;
    document.querySelector("#address").value = address;  
    document.querySelector("#suburb").value = suburb;  
    document.querySelector("#city").value = city;  
    document.querySelector("#country").value = country;  
    document.querySelector("#state").value = state;  
    document.querySelector("#phone").value = phone;
    document.querySelector("#website").value = website;   
    document.querySelector("#age").value = age;   
}
*/

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
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    // Checks if the first and last name fields are empty
    if (username.style.color == checkColor) {
        alert("This works!");
        return false;
    }
    if (password.style.color == checkColor) {
        alert("This works!");
        return false;
    }

    // Alerts the user that their submission was correct.
    alert("Thank you for your submission.")
    return true;
}
    
function validatePostcode() {
    var state = (document.getElementById("state").value);
    switch (state.RegExp) {
        
    }
}