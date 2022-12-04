// User Login Email Validation Start
const login_email_validation = () => {
    let email = document.getElementById("exampleInputEmail1");
    let email_err = document.getElementById("email_err");
    const mailpattern = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;
    if (mailpattern.test(email.value)) {
        email_err.innerHTML = "Email is Valid!!!";
        email_err.style.color = "green";
        return true;
    } else if (email.value == "") {
        email_err.innerHTML = "Fields Cannot be Empty!!!";
        email_err.style.color = "red";
        return false;
    } else {
        email_err.innerHTML = "Email is InValid!!!";
        email_err.style.color = "red";
        return false;
    }
}
// User Login Email Validation End

// User phone number validation Start
const login_phone_number_validation = () => {
    let login_phone_num = document.getElementById("exampleInputphonenum");
    let login_phone_err = document.getElementById("phone_err");
    const login_phonenumpattern = /^\d{10}$/;
    const login_phonenumpattern2 = /^[1-9]\d{2}[-][1-9]\d{2}[-]\d{4}$/;
    const login_phonenumpattern3 = /^[1-9]\d{2}\.\d{3}\.\d{4}$/;
    const login_phonenumpattern4 = /^[1-9]\d{2}\s\d{3}\s\d{4}$/;
    if (login_phonenumpattern.test(login_phone_num.value) || login_phonenumpattern2.test(login_phone_num.value) || login_phonenumpattern3.test(login_phone_num.value) || login_phonenumpattern4.test(login_phone_num.value)) {
        login_phone_err.innerHTML = "Phone Number is Valid!!";
        login_phone_err.style.color = "green";
        return true;
    } else if (login_phone_num.value == "") {
        login_phone_err.innerHTML = "Fields Cannot be Empty!!"
        login_phone_err.style.color = "red";
        return false;
    } else {
        login_phone_err.innerHTML = "Phone Number is InValid";
        login_phone_err.style.color = "red";
        return false;
    }
}

// User phone number validation end

// User login Password Validation Start
const login_password_validation = () => {
    let passid = document.getElementById("exampleInputPassword1");
    let pass_err = document.getElementById("pass_err");
    let strength = document.getElementById("strength");
    const passidpattern_1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passidpattern_2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passidpattern_1.test(passid.value)) {
        pass_err.innerHTML = "Password Valid!!!";
        pass_err.style.color = "green";
        strength.innerHTML = "Medium";
        strength.style.color = "orange";
        return true;
    } else if (passidpattern_2.test(passid.value)) {
        pass_err.innerHTML = "Password Valid!!!";
        pass_err.style.color = "green";
        strength.innerHTML = "Strong";
        strength.style.color = "green";
        return true;
    } else if (passid.value == "") {
        pass_err.innerHTML = "Fields cannot be empty!!!";
        pass_err.style.color = "red";
        strength.innerHTML = null;
        return false;
    } else {
        pass_err.innerHTML = "Password InValid!!!";
        pass_err.style.color = "red";
        strength.innerHTML = "Poor";
        strength.style.color = "red";
        return false;
    }
}
// User login Password Validation End

// User Login Form Submision start
let login = document.getElementById("userloginform");
login.onsubmit = () => {
    if (login_email_validation() && login_phone_number_validation() && login_password_validation()) {
        return login.action = "../index.html";
    } else if (login_email_validation() || login_phone_number_validation() || login_password_validation()) {
        return false;
    } else {
        return false;
    }
}
// User Login Form Submision start