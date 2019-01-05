// Practice Exercise

let isAccountLocked = false;
let userRole = "admin";

if (isAccountLocked) {
    console.log("Account is locked.");
} else if (userRole === "admin") {
    console.log("Welcome, Admin!");
} else {
    console.log("Welcome!");
};

// Challenge: Temperature Conditions

let temp = 45;

if (temp <= 32) {
    console.log("It's freezing outside!");
} else if (temp >= 110) {
    console.log("It's way too hot outside!");
} else {
    console.log("It's pretty nice outside. Enjoy your day!");
};