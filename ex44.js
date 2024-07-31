function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwich with following items: \n");
    items.forEach(function (singleitem) {
        return console.log(singleitem);
    });
    console.log("Now enjoy ur sandwich");
}
makeSandwich("bread", "butter");
makeSandwich("chicken", "cheese", "egg");
makeSandwich("bread", "butter", "chicken", "cheese", "egg", "tomato", "mayo");
