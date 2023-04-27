function fn(e) {
    e.preventDefault();
    var user = document.getElementById("username");
    var pass = document.getElementById("password");
    console.log(user.value);
    console.log(pass.value);
    userLogin=user.value;
    PassLogin=pass.value;
    if (userLogin === "priya" && PassLogin === "priya@123") {
        alert("correct user")
    }
    else{
        alert("incorrect user")
    }
    
}


var form = document.getElementById("form");
form.addEventListener("submit",fn);