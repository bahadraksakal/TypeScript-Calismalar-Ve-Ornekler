//generic olmaz ise
function sayi_deger(x: number): number {
    return x;
}
function string_deger(x: string): string {
    return x;
}
//generic ile
function sayi_deger3<T>(x: T): T {

    return x;
}

let sayi_3 = sayi_deger3<number>(2);
console.log(sayi_3);
let sayi_3_2 = sayi_deger3<string>("ankara");
console.log(sayi_3_2);

class GenericClass<T>{
    degisken: T;
    fonskiyon(parametre: T): void {
        console.log(parametre);
    }
}

let nesne = new GenericClass<number>();
nesne.degisken=5;
nesne.fonskiyon(40);

let nesne2 = new GenericClass<string>();
nesne2.degisken="izmir";
nesne2.fonskiyon("Bursa")
