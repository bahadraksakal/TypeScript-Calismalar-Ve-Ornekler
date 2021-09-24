function topla(x: number, y: number): number {
    return x + y;
}

let topla2 = function (x: number, y: number): number {
    return x + y;
}
console.log(topla2);
//console.log(topla2("ankara",1));
console.log(topla2(3, 4));


//default and optional parametreler
function topla3(x: number, y?: number): number {// ? işaretinin anlamı y oladabilir olmayadabilir demek
    //y undefined da olabilir.
    if (y) { // y taımlı ise
        return x + y;
    } else {
        return x;   // eğer y tanımlı değilken toplama yapmaya kalkarsak number+undefined yaptığımız için hat alırız
    }
}

// rest parametreler

function davetEt(ilkdavetli: string, ...digerleri: string[]): string {
    return ilkdavetli + " " + digerleri.join(" ");
}
console.log("engin","derin","salih","ahmet","bahadr","mehmet");
console.log("---------");


