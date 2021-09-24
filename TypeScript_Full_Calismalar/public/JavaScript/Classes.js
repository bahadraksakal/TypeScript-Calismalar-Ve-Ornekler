var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + " katlı evde Yemek Yenildi");
    };
    return Ev;
}());
var ev = new Ev(3, 7, 9);
ev.yemekYe();
console.log("evdeki pencere sayisi: "+ev._pencereSayisi);
