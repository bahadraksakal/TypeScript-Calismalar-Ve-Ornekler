class Kisi {
    private sayi_Pri=10; // tanımlandığı class dışında erişilemez.
    protected sayi_Pro=20; /// miras alan class lar erişebilir
    private _isim: string; // priate bir propertiynin isimmlendirilmesi _ çizgi ile başlar
    get isim():string{
        return this._isim;
    }
    set isim(isim: string){ // ts cınfig ile olayı çözdğk yoksa hata veriyordu.
        this._isim=isim
    }
    //deafult olarak public
    addKisi(){
        //dataBase ile ilgili api komutları
        this.sayi_Pri=11;
        this.sayi_Pro=22;
        console.log("kisi eklendi");
    }
}
class Musteri extends Kisi{    
    satisYap(){
        this.sayi_Pro=111;
        // this.sayi_Pri erişemeyiz.
        console.log("satis yapıldı");
    }
}
class Personel extends Kisi{
    maasOde(){
        console.log("Maas odendi");
    }    
}
let musteri: Musteri = new Musteri();
let personel: Kisi = new Personel();

musteri.addKisi();
musteri.satisYap();
console.log("---Personel için---");

personel.addKisi();
(<Personel> personel).maasOde();
// type scriptte diaomond operatörü casting için kullanılablir
musteri.isim="abuzer"; // set
console.log(musteri.isim); // get
