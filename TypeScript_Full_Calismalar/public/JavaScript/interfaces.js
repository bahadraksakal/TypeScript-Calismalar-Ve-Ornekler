function saveDB(product) {
    // db işlemleri....
    console.log(product.name + "  ürün kaydedildi");
}
saveDB({ ID: 1, name: "mouse", unitPrace: 200 }); //interface oto oluşturur
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    Product2.prototype.helloword = function () {
        console.log("eksiği olamaz fazlası okey");
    };
    return Product2;
}());
function saveDB2(product) {
    // db işlemleri....
    console.log(product.name + "  ürün kaydedildi DB-2");
}
var product2 = new Product2();
product2.name = "usb";
saveDB2(product2);
product2.helloword();
//# sourceMappingURL=interfaces.js.map