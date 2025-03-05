let fullname = document.getElementById("fullName");
let age = document.getElementById("age");
let email = document.getElementById("email");
let password = document.getElementById("password");
let number = document.getElementById("number");
let checkbox = document.getElementById("checkbox");
let sendBtn = document.getElementById("sendBtn");
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();   
    if(check()){
        let userObj = {
            fullname: fullname.value,
            age: age.value,
            email: email.value,
            password: password.value,
            number: number.value,
        };
        localStorage.setItem("userData", JSON.stringify(userObj));
        console.log(userObj);
        window.location.href = "profile.html";
    }else {
        alert("Iltimos bo'sh o'rin qoldirmang");
    }
    clearInp()
});

function check() {
    let count = 0;
    if (fullname.value.trim() != "") {
        count++;
    }
    if (age.value.trim() != "") {
        count++;
    }
    if (email.value.trim() != "") {
        count++;
    }
    if (password.value.trim() != "") {
        count++;
    }
    if (number.value.trim() != "") {
        count++;
    }
    return count === 5 && checkbox.checked;;
}
function clearInp() {
    fullname.value = "";
    age.value = "";
    email.value = "";
    password.value = "";
    number.value = "";
    checkbox.checked = false;
}
