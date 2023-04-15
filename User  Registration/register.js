var Users = [{
    username: "Pooja",
    password: "Pooja@123"
},
{
    username: "Ganesh",
    password: "Ganesh@123"
}
]

function getInfo() {
    var user = document.getElementById("username").value
    var pass = document.getElementById("password").value
    for (let i = 0; i < Users.length-1; i++) {
        if (user == Users[i].username && pass == Users[i].password) {
            alert("ok good");
        }


    }
    console.log("User fail to login");
}
