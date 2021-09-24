function topla(x, y) {
    return x + y;
}
var topla2 = function (x, y) {
    return x + y;
};
console.log(topla2);
//console.log(topla2("ankara",1));
console.log(topla2(3, 4));
//default and optional parametreler
function topla3(x, y) {
    //y undefined da olabilir.
    if (y) { // y taımlı ise
        return x + y;
    }
    else {
        return x; // eğer y tanımlı değilken toplama yapmaya kalkarsak number+undefined yaptığımız için hat alırız
    }
}
// rest parametreler
function davetEt(ilkdavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkdavetli + " " + digerleri.join(" ");
}
console.log("engin", "derin", "salih", "ahmet", "bahadr", "mehmet");
console.log("---------");
