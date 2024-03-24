document.getElementById("CSS").onclick = function () {
    let msg = "Nice work"
    let name = "Sheraz"

    document.getElementById("output").innerHTML = msg + " " + name
    alert(msg + " " + name)
}
document.getElementById("ANFU").onclick = function () {
    let firstName = prompt("Please enter your first name")
    console.log('firstName', firstName)
    let lastName = prompt("Please enterv your last name")
    let fullName = firstName + " " + lastName
    document.getElementById("output").innerHTML = fullName

}
document.getElementById("CO").onclick = function () {
    var num1 = 10;
    var num2 = 10;
    if (num1 <= num2) {
        console.log("Yes, your condition is true")
        alert("Yes, your condition is true")
    } else {
        console.log("No, your condition is false")
        alert("No, your condition is false")
    }
}
document.getElementById("IE").onclick = function () {
    var num1 = 15;
    var num2 = 14;
    console.log(num1 + num2)
    if (num1 > num2) {
        alert("Yes, your first condition is true")
        console.log("Yes, your first condition is false")
    } else if (num1 === num2) {
        console.log("Yes, your second condition is false")
        alert("Yes, your second condition is true")
    }
    else if (num1 <= num2) {
        console.log("Yes, your third condition is false")
        alert("Yes, your third condition is true")
    }
    else {
        console.log("No, your condition is false")
        alert("No, your condition is false")
    }
}
document.getElementById("T").onclick = function () {

    var age = +prompt("Your age?");
    var weight = +prompt("Your weight?");

    if (age >= 18 && weight <= 70) {
        console.log("You're a smart man.");
        alert("You're a smart man.")
    } else if (age = 18 && weight > 70) {
        console.log("You're a fat guy.")
        alert("You're a fat guy.")
    } else {
        console.log("You're a baby.")
        alert("You're a baby.")
    }
}
document.getElementById("N").onclick = function () {
    let age = +prompt("Your age?")
    if (age >= 18) {
        let weight = +prompt("Your weight?");
        if (weight <= 70) {
            console.log("You're a smart man.");
            alert("You're a smart man.")
        } else {
            console.log("Giaann hein aap.")
            alert("Giaann hein aap.")
        }
    } else {
        console.log("You're a baby.")
        alert("You're a baby.")
    }
}
document.getElementById("L").onclick = function () {
    var userName = prompt("Your user name");
    var pass = prompt("Your password");
    if (userName === "sheraz" && pass === "123") {
        console.log("User logged in");
        alert("User logged in")
    } else {
        console.log("User name or password is incorrect.");
        alert("User name or password is incorrect.")
    }

}