// Hello admin .Make an array of five or more username, including the name admin 
// Imagine ur writing code that will print a greeting to each user after they log in to a Website 
// loop through the Array, and print a greeting to each User 
// If the username is admin , print a special greeting otherwise print a generic greeting 
var userNames = ["ALi", "Ahmed", "Admin", "'Bilal", "subhan"];
userNames.forEach(function (user) {
    if (user === "Admin") {
        console.log(" hello ".concat(user, ", Would u like to see a special report?"));
    }
    else {
        console.log(" Thank u ".concat(user, ", for logging again"));
    }
});
