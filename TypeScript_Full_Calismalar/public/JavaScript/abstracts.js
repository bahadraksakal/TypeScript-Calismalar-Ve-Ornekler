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
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("kredi base e kayıt edildi");
    };
    return KrediBase;
}());
var TuketiciKredisi = /** @class */ (function (_super) {
    __extends(TuketiciKredisi, _super);
    function TuketiciKredisi() {
        return _super.call(this) || this;
    }
    TuketiciKredisi.prototype.hesapla = function () {
        console.log("Tuketici kredisi hesaplandı");
    };
    return TuketiciKredisi;
}(KrediBase));
var tuketiciKredisi = new TuketiciKredisi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();
//# sourceMappingURL=abstracts.js.map