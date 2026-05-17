function registerUser() {
    var user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    }; 

    var xhr = new XMLHttpRequest();

    xhr.open("POST","https://jsonplaceholder.typicode.com/users");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {
        var users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("User registered successfully!");
    };

    xhr.send(JSON.stringify(user));
}

