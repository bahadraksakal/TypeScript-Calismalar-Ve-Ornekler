let sayi: Number =30;
sayi=20;
let sehir: String ="Bursa";
sehir="mardin";
let dogruMu: Boolean =true;
dogruMu=false;

let sayilar: Number[]=[1,2,3,4,5,6,7,8];
let sayilar2: Array<Number>=[11,22,33,44,55,66,77,88];
let myTuple: [Number, String]=[16,"Bursa"];
console.log(myTuple[0]);//16
console.log(myTuple[1]);//"Bursa"

enum Renk{kirmizi=0,siyah,mavi}; // siya=1 , mavi=2  oto olur
let renk: Renk = Renk.siyah;

//eğer bize gelecek datanın veri tipinden emin değilsek any kullanırız
let deger: any=2;
deger=true;
deger="Bursa";
// hata vermez tüm veri tiplerini kullanabiliriz.

function selamver2(): void{
    console.log("Merhaba void");
   // return; //  sadece boş return verebiliriz
}// void tanımlandı return (bir deger) dersek hata alırız

