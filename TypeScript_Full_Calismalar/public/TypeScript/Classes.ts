class Ev{
    _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;
    yemekYe(){
        console.log(this._kat+"katlı vvde Yemek Yenildi");
    }
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi=odaSayisi;
        this._pencereSayisi=pencereSayisi;
        this._kat=kat;
    }
}

let ev: Ev = new Ev(3,7,9);
ev.yemekYe()
console.log(ev._pencereSayisi);
