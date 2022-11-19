// User Login Email Validation Start

let email = document.getElementById("exampleInputEmail1");
let email_err = document.getElementById("email_err");

email.addEventListener("blur", function () {
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
});

// User Login Email Validation End


// User login Password Validation Start

let passid = document.getElementById("exampleInputPassword1");
let pass_err = document.getElementById("pass_err");
let strength = document.getElementById("strength");

passid.addEventListener("input", function () {
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
});

// User login Password Validation End


// User phone number validation Start

let login_phone_num = document.getElementById("exampleInputphonenum");
let login_phone_err = document.getElementById("phone_err");

login_phone_num.addEventListener("blur", function () {
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
});


// User phone number validation end