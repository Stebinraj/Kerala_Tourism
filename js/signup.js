// User SignUp email validation start
const signup_email_validation = () => {
    let email_signup = document.getElementById("inputEmail4");
    let email_error = document.getElementById("error_email");
    const emailpattern = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;

    if (emailpattern.test(email_signup.value)) {
        email_error.innerHTML = "Email is Valid!!!";
        email_error.style.color = "green";
        return true;
    } else if (email_signup.value == "") {
        email_error.innerHTML = "Fields Cannot be Empty!!!";
        email_error.style.color = "red";
        return false;
    } else {
        email_error.innerHTML = "Email is InValid!!!";
        email_error.style.color = "red";
        return false;
    }
}
// User Signup email validation end

// User Signup password validation start

const signup_password_validation = () => {
    let passwd = document.getElementById("inputPassword4");
    let passwd_error = document.getElementById("passwd_error");
    let strength_signup = document.getElementById("strength_signup");
    const passwdpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passwdpattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwdpattern.test(passwd.value)) {
        passwd_error.innerHTML = "Password is Valid!!!";
        passwd_error.style.color = "green";
        strength_signup.innerHTML = "Medium";
        strength_signup.style.color = "orange";
        return true;
    } else if (passwdpattern2.test(passwd.value)) {
        passwd_error.innerHTML = "Password is Valid!!!";
        passwd_error.style.color = "green";
        strength_signup.innerHTML = "Strong";
        strength_signup.style.color = "green";
        return true;
    } else if (passwd.value == "") {
        passwd_error.innerHTML = "Fields Cannot be Empty!!!";
        passwd_error.style.color = "red";
        strength_signup.innerHTML = null;
        return false;
    } else {
        passwd_error.innerHTML = "Password is InValid";
        passwd_error.style.color = "red";
        strength_signup.innerHTML = "Poor";
        strength_signup.style.color = "red";
        return false;
    }
}

// User Signup password validation end

// User signup Phone number validation start
const signup_phone_number_validation = () => {
    let num_signup = document.getElementById("inputPhonenumber");
    let signup_error = document.getElementById("number_error");
    const signup_pattern_1 = /^\d{10}$/;
    const signup_pattern_2 = /^[1-9]\d{2}[-][1-9]\d{2}[-]\d{4}$/;
    const signup_pattern_3 = /^[1-9]\d{2}\.\d{3}\.\d{4}$/;
    const signup_pattern_4 = /^[1-9]\d{2}\s\d{3}\s\d{4}$/;

    if (signup_pattern_1.test(num_signup.value) || signup_pattern_2.test(num_signup.value) || signup_pattern_3.test(num_signup.value) || signup_pattern_4.test(num_signup.value)) {
        signup_error.innerHTML = "Phone Number is Valid!!!";
        signup_error.style.color = "green";
        return true;
    } else if (num_signup.value == "") {
        signup_error.innerHTML = "Fields cannot be Empty!!!";
        signup_error.style.color = "red";
        return false;
    } else {
        signup_error.innerHTML = "Phone Number is Invalid!!!";
        signup_error.style.color = "red";
        return false;
    }
}

// User signup Phone number validation end

// User signup address validation Start
const signup_address_validation = () => {
    let signup_address = document.getElementById("inputAddress2");
    let address_error = document.getElementById("address_error");
    const address_pattern = /^([a-zA-Z0-9\s,-]+)$/;
    if (address_pattern.test(signup_address.value)) {
        address_error.innerHTML = "Address is Valid!!!";
        address_error.style.color = "green";
        return true;
    } else if (signup_address.value == "") {
        address_error.innerHTML = "Fields cannot be Empty!!!";
        address_error.style.color = "red";
        return false;
    } else {
        address_error.innerHTML = "Address is InValid!!!";
        address_error.style.color = "red";
        return false;
    }
}
// User signup address validation End

//User Signup City Validation Start
const signup_city_validation = () => {
    let signup_city = document.getElementById("inputCity");
    let city_error = document.getElementById("city_error");
    const city_pattern = /^([a-zA-Z]+)$/;
    if (city_pattern.test(signup_city.value)) {
        city_error.innerHTML = "City is Valid!!!";
        city_error.style.color = "green";
        return true;
    } else if (signup_city.value == "") {
        city_error.innerHTML = "Fields cannot be Empty!!!";
        city_error.style.color = "red";
        return false;
    } else {
        city_error.innerHTML = "City is InValid!!!";
        city_error.style.color = "red";
        return false;
    }
}
//User Signup city Validation End

//User Signup State Input Start
const signup_state_validation = () => {
    let state = document.getElementById("inputState");
    let state_error = document.getElementById("state_error");
    if (state.value === "Default") {
        state_error.innerHTML = "State is InValid!!!";
        state_error.style.color = "red";
        return false;
    } else {
        state_error.innerHTML = "State is Valid!!!";
        state_error.style.color = "green";
        return true;
    }
}
// User Signup State Input End

//User Signup Zip Validation Start
const signup_zip_validation = () => {
    let signup_zip = document.getElementById("inputZip");
    let zip_error = document.getElementById("zip_error");
    const zip_pattern = /^[1-9][0-9]{5}$/;
    if (zip_pattern.test(signup_zip.value)) {
        zip_error.innerHTML = "Zip is Valid!!!";
        zip_error.style.color = "green";
        return true
    } else if (signup_zip.value == "") {
        zip_error.innerHTML = "Fields Cannot be Empty!!!";
        zip_error.style.color = "red";
        return false;
    } else {
        zip_error.innerHTML = "Zip is InValid!!!";
        zip_error.style.color = "red";
        return false;
    }
}
//User Signup Zip Validation End

// User Signup Form Submssion Start
let signup = document.getElementById("signup_form");
signup.onsubmit = () => {
    if (signup_email_validation() & signup_password_validation() & signup_phone_number_validation() & signup_address_validation() & signup_city_validation() & signup_state_validation() & signup_zip_validation()) {
        return signup.action = "../index.html"
    } else if (signup_email_validation() | signup_password_validation() | signup_phone_number_validation() | signup_address_validation() | signup_city_validation() | signup_state_validation() | signup_zip_validation()) {
        return false;
    } else {
        return false;
    }
}
// User Signup Form Submssion Start