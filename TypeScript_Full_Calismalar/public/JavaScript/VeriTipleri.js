var sayi = 30;
sayi = 20;
var sehir = "Bursa";
sehir = "mardin";
var dogruMu = true;
dogruMu = false;
var sayilar = [1, 2, 3, 4, 5, 6, 7, 8];
var sayilar2 = [11, 22, 33, 44, 55, 66, 77, 88];
var myTuple = [16, "Bursa"];
console.log(myTuple[0]); //16
console.log(myTuple[1]); //"Bursa"
var Renk;
(function (Renk) {
    Renk[Renk["kirmizi"] = 0] = "kirmizi";
    Renk[Renk["siyah"] = 1] = "siyah";
    Renk[Renk["mavi"] = 2] = "mavi";
})(Renk || (Renk = {}));
; // siya=1 , mavi=2  oto olur
var renk = Renk.siyah;
//eğer bize gelecek datanın veri tipinden emin değilsek any kullanırız
var deger = 2;
deger = true;
deger = "Bursa";
// hata vermez tüm veri tiplerini kullanabiliriz.
function selamver() {
    console.log("Merhaba void");
    // return; //  sadece boş return verebiliriz
} // void tanımlandı return (bir deger) dersek hata alırız
