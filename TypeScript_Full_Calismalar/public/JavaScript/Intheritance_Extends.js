var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Kisi = /** @class */ (function () {
    function Kisi() {
        this.sayi_Pri = 10; // tanımlandığı class dışında erişilemez.
        this.sayi_Pro = 20; /// miras alan class lar erişebilir
    }
    Object.defineProperty(Kisi.prototype, "isim", {
        get: function () {
            return this._isim;
        },
        set: function (isim) {
            this._isim = isim;
        },
        enumerable: false,
        configurable: true
    });
    //deafult olarak public
    Kisi.prototype.addKisi = function () {
        //dataBase ile ilgili api komutları
        this.sayi_Pri = 11;
        this.sayi_Pro = 22;
        console.log("kisi eklendi");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYap = function () {
        this.sayi_Pro = 111;
        // this.sayi_Pri erişemeyiz.
        console.log("satis yapıldı");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maas odendi");
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
var personel = new Personel();
musteri.addKisi();
musteri.satisYap();
console.log("---Personel için---");
personel.addKisi();
personel.maasOde();
// type scriptte diaomond operatörü casting için kullanılablir
musteri.isim = "abuzer"; // set
console.log(musteri.isim); // get
//# sourceMappingURL=Intheritance_Extends.js.map