// User Login Email Validation Start

const email = document.getElementById("exampleInputEmail1");
const email_err = document.getElementById("email_err");
const mailpattern = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;

email.addEventListener("blur", function () {
    if (mailpattern.test(email.value)) {
        email_err.innerHTML = "Email is Valid!!!";
        email_err.style.color = "green";
    } else {
        email_err.innerHTML = "Email is InValid!!!";
        email_err.style.color = "red";
    }
});

// User Login Email Validation End


