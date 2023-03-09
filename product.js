

// window.onload = function(){
//     alert("worked")
//     var dataFromLS = JSON.parse(localStorage.getItem("userProduct"));
//     console.log(dataFromLS,"dataFromLS")
    

//     array = [];
//     for(var i=0; i<dataFromLS.length; i++){
//         array += `<div><img src="${ dataFromLS[i].proImg}" /><br/><h1>${dataFromLS[i].proName}</h1><br/><p>${dataFromLS[i].proPrice}</p> <button id = "cartbutton" onclick='addToCart(${JSON.stringify(dataFromLS[i])})' >Add to cart</button></div>`
//         // console.log(dataFromLS[i].proName)
//     }
//     var divFromHTML = document.getElementById("screen")
//     divFromHTML.innerHTML = array;
// }
// function addToCart(pro){
//     var product = JSON.stringify(pro);
//     var dataFromLS = JSON.parse(localStorage.getItem("userData"));
//     var currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     if (currentUser){
//         var allUsers = [];
//         for (var i=0; i <dataFromLS.length ; i++){
//             if(dataFromLS[i].email === currentUser["currentUserEmail"]){
//                 var newObj = dataFromLS[i];
//                 newObj["cartProducts"] = newObj["cartProducts"] || [];
//                 newObj["cartProducts"].push(JSON.parse(product));
//                 allUsers.push(newObj);
//             } else {
//                 allUsers.push(dataFromLS[i]);
//             }
//         }
//         localStorage.setItem("userData", JSON.stringify(allUsers));
//         alert("product added to cart ");
//     } else{
//         alert(" login first to add product");
//     }

// }

window.onload = function () {
    // alert("Window loaded!")

    var products = JSON.parse(localStorage.getItem("products"));

    var divFromHtml = document.getElementById("screen");

    var array = [];

    for (var i = 0; i < products.length; i++) {
        array += `<div><img src="${products[i].image}" alt='proImage' /><br/><h1>${products[i].name}</h1><br/><p>${products[i].price}</p><button onclick='addToCart(${JSON.stringify(products[i])})'>Add to cart</button></div>`
    }
    divFromHtml.innerHTML = array;
}



function addToCart(pro) {
    var product = JSON.stringify(pro);
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    var currentUser = JSON.parse(localStorage.getItem("current-user"));
    if(currentUser){
        var allUsers = [];
        for(var i =0; i < dataFromLS.length ; i++ ){
            if(dataFromLS[i].email === currentUser["current-user-email"] ){
                var newObj = dataFromLS[i];
                newObj["cartProducts"] = newObj["cartProducts"] || [];
                newObj["cartProducts"].push(JSON.parse(product));
                allUsers.push(newObj)
                
            } else {
                allUsers.push(dataFromLS[i])
            }
        }
        localStorage.setItem("userData", JSON.stringify(allUsers));
        alert("Product added to cart!");
    } else {
        alert("Login first to add product into cart!")
    }
}