/* Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase. */
var myName = "Umair shaikh";
console.log("lowercase:", myName.toLowerCase());
console.log("uppercase:", myName.toLocaleUpperCase());
console.log("titlecase:", myName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
