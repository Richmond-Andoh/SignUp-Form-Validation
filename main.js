"use strict"

let id = (id) =>  document.getElementById(id);
let  classes = (classes) => document.getElementsByClassName(classes);
let name = id('name'),
    email = id('email'),
    signUpForm = id('signUpForm'),
    password = id('password'),
    eye = id("eye"),
    eyeSlash = id("eyeSlash"),
    errMessage = classes('errMessage'); 

password.addEventListener('focus', (e) => {
    eyeSlash.style.opacity = "1";
    document.getElementById("exclamation3").style.opacity = "0"
    document.getElementById("check3").style.opacity = "0";
})

eyeSlash.addEventListener("click", (e) => {
   //console.log("clicked is triggered")
    togglePassword();
})

let togglePassword = () => {
    let x = password;
    if(x.type === "password"){
        x.type = "text";
        eyeSlash.style.opacity = "0"
        eye.style.opacity = "1"
    } else{
        x.type = "password";
        eye.style.opacity = "0";
        eyeSlash.style.opacity = "1";
    }
}
    
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateName();
    validateEmail();
    validatePassword();
    eye.style.opacity = "0";
    eyeSlash.style.opacity = "0";
})

let validateName = () => {
    if(name.value.trim() === ""){
        errMessage[0].innerHTML = "Name cannot be empty";
       document.getElementById("exclamation1").style.opacity = "1";
       document.getElementById("check1").style.opacity = "0";
    }

    else if(name.value.length <= 5){
        errMessage[0].innerHTML = 'Name is too short';
        document.getElementById("exclamation1").style.opacity = "1";
        document.getElementById("check1").style.opacity = "0";
    }

    else{
        name.value = ''
        errMessage[0].innerHTML = '';
        document.getElementById("exclamation1").style.opacity = "0";
        document.getElementById("check1").style.opacity = "1";
    }
}

let validateEmail = () => {
    const x = email.value;
    const atpoition = x.indexOf("@");
    const dotpostion = x.lastIndexOf(".");
    if(email.value.trim() === ""){
        errMessage[1].innerHTML = "Email cannot be empty";
        document.getElementById("exclamation2").style.opacity = "1";
        document.getElementById("check2").style.opacity = "0";
        
    }
    else if(atpoition<2 || dotpostion < atpoition + 2 || dotpostion+2 >= x.length){
        errMessage[1].innerHTML = "Invalid email address";
        document.getElementById("exclamation2").style.opacity = "1";
        document.getElementById("check1").style.opacity = "0";
    }

    else{
       email.value = "";
       errMessage[1].innerHTML = "";
       document.getElementById("exclamation2").style.opacity = "0";
       document.getElementById("check2").style.opacity = "1";
    }
    
}

let validatePassword= () => {
    if(password.value.trim() === ""){
        errMessage[2].innerHTML = "Password cannot be empty";
        document.getElementById("exclamation3").style.opacity = "1"
        document.getElementById("check3").style.opacity = "0";
    }
    else if(password.value.length < 6){
       errMessage[2].innerHTML = "Password is too short";
       document.getElementById("exclamation3").style.opacity = "1"
       document.getElementById("check3").style.opacity = "0";
    }

    else{
        password.value = "";
        errMessage[2].innerHTML = "";
        document.getElementById("exclamation3").style.opacity = "0"
        document.getElementById("check3").style.opacity = "1";
    }
}
