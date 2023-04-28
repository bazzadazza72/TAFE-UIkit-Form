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
        
        state.options[state.options.length] = new Option('-- select state --','0');
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
        
        state.options[state.options.length] = new Option('-- select state --','0');
        state.options[state.options.length] = new Option('Northland', 'SA');
        state.options[state.options.length] = new Option('Auckland', 'NSW');
        state.options[state.options.length] = new Option('Waikato', 'VIC');
        state.options[state.options.length] = new Option('Bay of Plenty', 'QLD');
        state.options[state.options.length] = new Option('Gisbourne', 'TAS');
        state.options[state.options.length] = new Option("Hawke's Bay",'WA');
        state.options[state.options.length] = new Option('Taranaki', 'ACT');
        state.options[state.options.length] = new Option('Manawatū-Whanganui','NT');
        state.options[state.options.length] = new Option('Wellington', 'TAS');
        state.options[state.options.length] = new Option('Tasman','WA');
        state.options[state.options.length] = new Option('Nelson', 'ACT');
        state.options[state.options.length] = new Option('Marlborough','NT');
        state.options[state.options.length] = new Option('West Coast','NT');
        state.options[state.options.length] = new Option('Canterbury', 'TAS');
        state.options[state.options.length] = new Option('Otago','WA');
        state.options[state.options.length] = new Option('Southland', 'ACT');
    }
}
    
    