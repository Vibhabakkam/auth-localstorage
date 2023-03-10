// function register(event) {
//     // getting data from html to js
//     event.preventDefault();
//     var userName = document.getElementById("userName").value;
//     var userEmail = document.getElementById("userEmail").value;
//     var userPassword = document.getElementById("userPassword").value;
//     var userData = { name: userName, email: userEmail, password: userPassword }

//     // storing data from js to ls
//     var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
//     console.log(dataFromLS, 'dataFromLS')
//     var flag = false;
//     for (var i = 0; i < dataFromLS.length; i++) {
//         if (dataFromLS[i].email === userEmail) {
//             flag = true;
//         }
//     }
//     if (flag === true) {
//         alert("Email already present, use another one")
//     } else if (userPassword.length < 1 && userName.length < 1 && userEmail.length < 1) {
//         alert("must fill all fields")
//     } else if (userPassword.length < 8) {
//         alert("password must be more than 8 digit")
//     } else {
//         dataFromLS.push(userData);
//         localStorage.setItem("userData", JSON.stringify(dataFromLS));
//         document.getElementById("userName").value = " ";
//         document.getElementById("userEmail").value = " ";
//         document.getElementById("userPassword").value = " ";
//         window.location.href = "/login.html";
//         alert("Registration done");

//     }
// }

// function login(event) {
//     event.preventDefault();
//     var userEmail = document.getElementById("email").value;
//     var userPassword = document.getElementById("password").value;
//     var userData = { email: userEmail, password: userPassword }

//     var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
//     console.log(dataFromLS, 'dataFromLS')
//     var flag = false;
//     for (var i = 0; i < dataFromLS.length; i++) {
//         if (dataFromLS[i].email === userEmail && dataFromLS[i].password === userPassword) {
//             flag = true;
//         }
//     }
//     if (flag === true) {
//         alert("login succecfully")
//         dataFromLS.push(userData);
//         localStorage.setItem("userData", JSON.stringify(dataFromLS));
//         document.getElementById("email").value = " ";
//         document.getElementById("password").value = " ";
//         var User = {};
//         User = { email: userEmail }
//         localStorage.setItem("currentUser", JSON.stringify(User));


//         window.location.href = '/Home.html';
//     } else {

//         alert("Wrong cred, Please check your email and password");
//     }
// }

// var gettingEmail;
// function forgetPassword() {

//     var dataFromLS = JSON.parse(localStorage.getItem("userData"));
//     var userEmail = document.getElementById("email").value;
//     gettingEmail = userEmail;

//     var flag = false;
//     for (var i = 0; i < dataFromLS.length; i++) {
//         if (dataFromLS[i].email === userEmail) {
//             flag = true;
//         }
//     }
//     if (flag === true) {
//         // window.location.href = '/newpass.html';

//         var newCode = `<input type = "password" id ="password" > <br> <button onclick="newPassword()">set new password</button>`
//         var divFromHtml = document.getElementById("change")
//         divFromHtml.innerHTML = newCode;
//         alert(" now set new password")
//     }
//     else {
//         alert(" email not found ,check email again ")
//     }


// }


// function newPassword() {
//     var userPassword = document.getElementById("password").value;
//     var dataFromLS = JSON.parse(localStorage.getItem("userData"));
//     //    alert ("worked")


//     for (var i = 0; i < dataFromLS.length; i++) {
//         if (dataFromLS[i].email === gettingEmail) {
//             dataFromLS[i].password = userPassword
//         }
//     }
//     localStorage.setItem('userData', JSON.stringify(dataFromLS));
//     gettingEmail = "";

//     window.location.href = '/login.html';
//     alert("password change now login")

// }

// function addToLS() {
//     alert("product added")
//     var Name = document.getElementById("proName").value;
//     var Imge = document.getElementById("proImg").value;
//     var Price = document.getElementById("proPrice").value;

//     var userProduct = { proImg: Imge, proName: Name, proPrice: Price }
//     // store deta from java script to local storage
//     var dataFromLS = JSON.parse(localStorage.getItem("userProduct")) || [];
//     console.log(dataFromLS, 'dataFromLS')

//     dataFromLS.push(userProduct);
//     localStorage.setItem("userProduct", JSON.stringify(dataFromLS));
//     alert("product added")

//     var Name = document.getElementById("proName").value = "";
//     var Imge = document.getElementById("proImg").value = "";
//     var Price = document.getElementById("proPrice").value = "";
// }


function register(event){
    event.preventDefault();

    var userName= document.getElementById("userName").value;
    var userEmail =document.getElementById("userEmail").value;
    var userPassword =document.getElementById("userPassword").value;
    var userData = { name:userName, email:userEmail, password:userPassword };

    var dataFromLs =JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLs,"dataFromLs");

    var flag =false;
    for(var i=0; i<dataFromLs.length;i++){
        if(dataFromLs[i].email === userEmail){
            flag =true;
        }
    }

    if (flag === true){
        alert("Email already Present");
        document.getElementById("userEmail").value ='';
    }
    else if(userName.length < 1 && userEmail.length <1){
        alert("must filled all fields");
    }
    else if(userPassword.length < 8){
        alert("Password Must be more than 8 digit");
        document.getElementById("userPassword").value ="";
    }
    else{
        dataFromLs.push(userData);
        localStorage.setItem("userData",JSON.stringify(dataFromLs));
        document.getElementById("userName").value ='';
        document.getElementById("userEmail").value ='';
        document.getElementById("userPassword").value ="";
        window.location.href ="/login.html";
        alert("registration Done");
    }
}

function login(event){
    event.preventDefault(event);
    var userEmail =document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    var dataFromLs =JSON.parse(localStorage.getItem("userData"));

    var flag= false;

    for (var i=0 ; i< dataFromLs.length ; i++){
        if(dataFromLs[i].email === userEmail  && dataFromLs[i].password === userPassword){
            flag =true;
        }
    }

    if(flag){
        document.getElementById("email").value ="";
        document.getElementById("password").value ="";

        var user ={};
        user["current-user-email"]= userEmail;
        localStorage.setItem("currentUser",JSON.stringify(user));
        window.location.href="/home.html";
        alert("Login sucessful");
    }
    else{
        alert("Email or Password does not match");
    }

}
var gettingEmail;

function forgotPassword(event){
    event.preventDefault();
    
    var dataFromLs=JSON.parse(localStorage.getItem("userData"));
    var emailFromUser =document.getElementById("email").value;

    gettingEmail =emailFromUser;

    var flag = false;
    for(var i=0; i<dataFromLs.length; i++){
        if(dataFromLs[i].email === emailFromUser){
            flag =true;
        }
    }
    if(flag){
        var newCode =`<input type="password" id="password"><br><button onClick="newPassword()"Reset> New Password</button>`;
        var divFromHtml =document.getElementById("change");
        divFromHtml.innerHTML =newCode;
        alert("Now set New Password");

    }
    else{
        alert("Please Enter Register Email");
        document.getElementById("email").value ="";
    }
}

function newPassword(){
    
    var dataFromLs =JSON.parse(localStorage.getItem("userData"));
    var userPassword =document.getElementById("password").value;

    // console.log(passwordFromUser,"Password");
    for(var i=0; i<dataFromLs.length; i++){
        if(dataFromLs[i].email === gettingEmail){
            dataFromLs[i].password = userPassword;
        }
    }
     // console.log(passwordFromUser,"Password");

    localStorage.setItem("userData",JSON.stringify(dataFromLs));
    gettingEmail ="";
    // divFromHtml.innerHTML =rest;
    window.location.href ="/login.html";
    alert("Password Changed , Now Login");

    
}

function product(){

    var dataFromLs =JSON.parse(localStorage.getItem("product")) || [];

    var userName = document.getElementById("name").value;
    var userImage= document.getElementById("image").value;
    var price =document.getElementById("price").value;

    var product ={name:userName, image:userImage, price:price};
    dataFromLs.push(product);

    localStorage.setItem("product",JSON.stringify(dataFromLs));
    alert("Added");
}