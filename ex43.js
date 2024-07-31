function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["ALi", "Osama", "Asif"];
var copy_magicians_names = magicians_names.slice();
var copy_great_magicians = make_great(copy_magicians_names);
console.log("Original array\n");
show_magician(magicians_names);
console.log("copied array\n");
show_magician(copy_great_magicians);
