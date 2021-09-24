var sehirler = ["Bursa", "İzmir", "İstanbul", "Ankara"];
console.log("--of lu olan for--");
for (var _i = 0, sehirler_1 = sehirler; _i < sehirler_1.length; _i++) {
    var item = sehirler_1[_i];
    // genelde of lu olan yapı kullanır bu sayede biz  dataya ulaşırız foreach gibi
    console.log(item);
}
console.log("--in li olan for--");
for (var key in sehirler) {
    console.log(key);
}
console.log("--normal olan for--");
for (var i = 0; i < sehirler.length; i++) {
    console.log("value: " + sehirler[i] + "    key: " + i);
}
//# sourceMappingURL=Loops.js.map