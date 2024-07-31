function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["ALi", "Osama", "Asif"];
var great_magicians = make_great(magicians_names);
show_magician(great_magicians);
