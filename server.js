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


function register(event) {
    event.preventDefault();
    // getting data from html to js
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData = { name: userName, email: userEmail, password: userPassword }

    // storing data from js to ls
    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLS, 'dataFromLS')
    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail) {
            flag = true;
        }
    }
    if (flag === true) {
        alert("Email already Present, User another one.")
    } else if (userPassword.length < 1 && userName.length < 1 && userEmail < 1) {
        alert("Must Fill all fields!")
    } else if (userPassword.length < 8) {
        alert("Password must be more than 8 Digit!")
    } else {
        dataFromLS.push(userData);
        localStorage.setItem("userData", JSON.stringify(dataFromLS));
        document.getElementById("userName").value = '';
        document.getElementById("userEmail").value = '';
        document.getElementById("userPassword").value = '';
        window.location.href = "/login.html";
        alert("Registration Done.");
    }
}


// Name 
// number 
// email 
// password
// confirm password






function login(event) {
    event.preventDefault();
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    
    var datafromLS = JSON.parse(localStorage.getItem("userData"));

    var rocky = false;
    for (var i = 0; i < datafromLS.length; i++) {
        if (datafromLS[i].email === userEmail && datafromLS[i].password === userPassword) {
            rocky = true;
        }
    }
    // console.log(flag,"flag herer")
    if (rocky === true) {
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        var user = {};
        user["current-user-email"] = userEmail ;
        localStorage.setItem("current-user", JSON.stringify(user))
        window.location.href = '/home.html';
        alert("Logged in successfull.")
    } else {
        alert("Wrong cred, Please check your email and password.");
    }
}

var gettingEmail;

function forgetPassword() {
    // alert("Worked")
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    var userEmail = document.getElementById("email").value;
    gettingEmail = userEmail;
    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail) {
            flag = true;
        }
    }

    if (flag === true) {
        var newCode = `<input type="password" id="password" /><br/><button onclick="newPassword()">Set new Password</button>`
        // window.location.href = '/new-pass.html';
        var divFromHtml = document.getElementById("change")
        divFromHtml.innerHTML = newCode;
        alert("Now Set new password...")
    } else {
        alert("Your email not in our db, check email again.")
    }

}

function newPassword() {
    var userPassword = document.getElementById("password").value;
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));

    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === gettingEmail) {
            dataFromLS[i].password = userPassword
        }
    }

    localStorage.setItem('userData', JSON.stringify(dataFromLS));
    gettingEmail = "";
    // console.log(gettingEmail,"gettingEmail");
    window.location.href = '/login.html';
    alert('Password Changed, Now login.')

}



function addToLS(){
    // alert("worked")

    var proName = document.getElementById("name").value;
    var proImage = document.getElementById("image").value;
    var proPrice = document.getElementById("price").value;

    var product = { name :proName, price :proPrice , image:proImage }

    var dataFromLS = JSON.parse(localStorage.getItem("products")) || [] ; 
    dataFromLS.push(product);

    localStorage.setItem("products", JSON.stringify(dataFromLS));
    alert("Product submited!")

}