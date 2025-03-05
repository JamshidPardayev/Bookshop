let email = document.getElementById("email");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let sendBtn = document.getElementById("sendBtn");
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();   
    if(check()){
        let userObj = {
            email: email.value,
            password: password.value,
        };
        localStorage.setItem("userData", JSON.stringify(userObj));
        console.log(userObj);
        window.location.href = "profile2.html";
    }else {
        alert("Iltimos bo'sh o'rin qoldirmang");
    }
    clearInp()
});

function check() {
    let count = 0;
    if (email.value.trim() != "") {
        count++;
    }
    if (password.value.trim() != "") {
        count++;
    }
    return count === 2 && checkbox.checked;;
}
function clearInp() {
    email.value = "";
    password.value = "";
    checkbox.checked = false;
}
