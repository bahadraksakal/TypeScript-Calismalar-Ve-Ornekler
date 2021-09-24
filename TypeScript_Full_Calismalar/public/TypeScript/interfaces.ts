interface Product{
    ID: number;
    name: string;
    unitPrace: number;
    
}

function saveDB(product: Product){
    // db işlemleri....
    console.log(product.name+"  ürün kaydedildi");
}

saveDB({ID:1, name:"mouse", unitPrace:200}); //interface oto oluşturur

class Product2 implements Product{
    ID: number;
    name: string;
    unitPrace: number;
    
    helloword():void{
        console.log("eksiği olamaz fazlası okey");
    }
    
}

function saveDB2(product: Product){
    // db işlemleri....
    console.log(product.name+"  ürün kaydedildi DB-2");
}

let product2 = new Product2();
product2.name="usb";
saveDB2(product2);
product2.helloword();
