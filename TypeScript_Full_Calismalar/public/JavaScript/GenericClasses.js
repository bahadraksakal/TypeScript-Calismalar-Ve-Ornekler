//generic olmaz ise
function sayi_deger(x) {
    return x;
}
function string_deger(x) {
    return x;
}
//generic ile
function sayi_deger3(x) {
    return x;
}
var sayi_3 = sayi_deger3(2);
console.log(sayi_3);
var sayi_3_2 = sayi_deger3("ankara");
console.log(sayi_3_2);
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonskiyon = function (parametre) {
        console.log(parametre);
    };
    return GenericClass;
}());
var nesne = new GenericClass();
nesne.degisken = 5;
nesne.fonskiyon(40);
var nesne2 = new GenericClass();
nesne2.degisken = "izmir";
nesne2.fonskiyon("Bursa");
//# sourceMappingURL=GenericClasses.js.map