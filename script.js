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

function validatePostCode(formField, errorField) {

    //create a variable for the form field.
    theField = document.getElementById(formField);
    //create a variable for the error field.
    theError = document.getElementById(errorField);

    if (formField == "pcode") {
        var state = document.getElementById("state").value;

        switch (state) {
        case "SA":
            var thePattern = new RegExp(/^5[0-9]{3}$/);
            break;
        case "NSW":
            var thePattern = new RegExp(/^2[0-9]{3}$/);
            break;
        case "VIC":
            var thePattern = new RegExp(/^3[0-9]{3}$/);
            break;
        case "QLD":
            var thePattern = new RegExp(/^4[0-9]{3}$/);
            break;
        case "TAZ":
            var thePattern = new RegExp(/^7[0-9]{3}$/);
            break;
        case "WA":
            var thePattern = new RegExp(/^6[0-9]{3}$/);
            break;
        case "ACT":
            var thePattern = new RegExp(/^2[0-9]{3}$/);
            break;
        case "NT":
            var thePattern = new RegExp(/^0[0-9]{3}$/);
            break;
        default:
            break;
        }
    } else {
        // the new pattern is created using the input code for the postcode
        var thePattern = new RegExp("^" + formField.pattern + "$");
    }
    //test input field data with regex pattern from the validated postcode()
    if (!thePattern.test(theField.value)) {
        theField.style.background = '#FF9999'; //Turns background red.
        theError.style.display = "block"; //displays span.
        theError.innerHTML = "Please use only 4 numbers, and ensure the postcode is valid for your state."; //displays warning on span tag.
        //theField.focus(); // puts focus on the input.
        return false;
    } else {
        theField.style.background = '#CCFFCC'; //turns background green
        theError.style.display = "none"; // removes error span.
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
        
        state.options[state.options.length] = new Option('Select a state','0');
        state.options[state.options.length] = new Option('South Australia', 'SA');
        state.options[state.options.length] = new Option('New South Wales', 'NSW');
        state.options[state.options.length] = new Option('Victoria', 'VIC');
        state.options[state.options.length] = new Option('Queensland', 'QLD');
        state.options[state.options.length] = new Option('Tasmania', 'TAS');
        state.options[state.options.length] = new Option('Western Australia','WA');
        state.options[state.options.length] = new Option('Australian Capital Territory', 'ACT');
        state.options[state.options.length] = new Option('Northern Territory','NT');
    }
    if (document.getElementById("country").value != '0') {
        document.getElementById("country").style.backgroundColor = '#CCFFCC';
    } else {
        document.getElementById("country").style.backgroundColor = '#FF9999';
    }
}

function stateColors() {
    if (document.getElementById("state").value == '0') {
        document.getElementById("state").style.background = '#FF9999';
    } else {
        document.getElementById("state").style.background = '#CCFFCC';
    }
}

function validateForm() {

    //This next section gets everything with id "form1"

    var elements = document.getElementById("form1").elements;

    //iteration: go through all of the form elementFromPoint

    for (var i = 0, element; element = elements[i++]; )
        {
        // this checks for elementy types, looking in particular for <input> or <select>,
        // it also checks the bg of an element (red or green).

        if ((element =='[object HTMLInputElement]' || element == '[object HTMLSelectElement]') && (element.style.backgroundColor !='rgb(204, 255, 204)')) {
            //check for the color picker or submit button..

            if (element.id != 'color' && element.type != 'submit') {

                alert("Some fields are incorrect. Go back, make any necessary changes and try again.");
                console.log(element.type);
                return false;
            }
        }
    }

    //To test the color picker NOTE: Hex value this time. You will need to edit the id's
    //below to match yours.

    if (document.getElementById("color").value != "#000000")
    {
        alert("You have selected the incorrect colour in the picker. Please try again.");
        document.getElementById("color").focus();
        return false;
    }
    localStorage.clear();
}
    
