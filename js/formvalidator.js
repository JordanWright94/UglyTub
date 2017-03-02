/*This function performs form Validation on the "Contact Us" page
http://www.w3schools.com/js/js_validation.asp was partially used to help write this function. 
*/
function validateContactForm(){
	//get values from textboxes etc.
	var name = document.forms["contact_form"]["cname"].value;
	var email = document.forms["contact_form"]["email"].value;
	var phone = document.forms["contact_form"]["phone_number"].value;
	var city = document.forms["contact_form"]["city_and_state"].value;
	var msg = document.forms["contact_form"]["yourmessage"].value;
	var eMessage = document.getElementById('eMessage');
	var eName = document.getElementById('eName');
	var eEmail = document.getElementById('eEmail');
	var eCity = document.getElementById('eCity');
	var ePhone = document.getElementById('ePhone');
	var submitted = document.getElementById('submitted');

	//check that no fields are empty (form validation)
	if (name == null || name == "") {
		eName.style.display = 'none';
		eEmail.style.display = 'none';
		ePhone.style.display = 'none';
		eCity.style.display = 'none';
		eMessage.style.display = 'none';
        eName.style.display = 'block'; //inform user of error
		return false; //return false if the company name has not been given
		
    }else if (email == null || email == "") {
		eName.style.display = 'none';
		eEmail.style.display = 'none';
		ePhone.style.display = 'none';
		eCity.style.display = 'none';
		eMessage.style.display = 'none';
        eEmail.style.display = 'block'; //inform user of error
		return false; //return false if an email has not been provided
		
	}else if (phone == null || phone == "") {
		eName.style.display = 'none';
		eEmail.style.display = 'none';
		ePhone.style.display = 'none';
		eCity.style.display = 'none';
		eMessage.style.display = 'none';
        ePhone.style.display = 'block'; //inform user of error
		return false; //return false if a phone number has not been provided 
		
    }else if (city == null || city == "") {
		eName.style.display = 'none';
		eEmail.style.display = 'none';
		ePhone.style.display = 'none';
		eCity.style.display = 'none';
		eMessage.style.display = 'none';
        eCity.style.display = 'block';//inform user of error
		return false; //return false if the city and state of the user is not provided
	
	}
	else if (msg == null || msg == "") {
		eName.style.display = 'none';
		eEmail.style.display = 'none';
		ePhone.style.display = 'none';
		eCity.style.display = 'none';
		eMessage.style.display = 'none';
        eMessage.style.display = 'block'; //inform user of error
		return false; //return false if the message has not been given
		
	}
	
	else{
		return true; //all requirements for a valid form have been achieved so return true
	}
	
}