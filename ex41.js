function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function make_great(magicians: string[]){
//     return magicians.map(name => `The Great ${name}`)
// }
var magicians_names = ["ALi", "Osama", "Asif"];
// let great_magicians = make_great(magicians_names)
show_magician(magicians_names);
