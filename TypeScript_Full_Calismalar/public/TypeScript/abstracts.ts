abstract class KrediBase{
    constructor(){
        
    }
    kaydet():void{
        console.log("kredi base e kayıt edildi");
    }
    abstract hesapla():void; // konut kredisi olur beyaz eşya kredi olur  farklı farklı hesaplama yöntemleri vardır
    
}
    
class TuketiciKredisi extends KrediBase{
    constructor(){
        super();
    }
    hesapla():void{
        console.log("Tuketici kredisi hesaplandı");
    }
}

let tuketiciKredisi = new TuketiciKredisi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();
