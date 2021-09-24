let sehirler: String[]=["Bursa","İzmir","İstanbul","Ankara"];

console.log("--of lu olan for--");
for (let item of sehirler) {
     // genelde of lu olan yapı kullanır bu sayede biz  dataya ulaşırız foreach gibi
    console.log(item);
}

console.log("--in li olan for--");
for (let key in sehirler) {
    console.log(key);
}

console.log("--normal olan for--");
for (let i = 0; i < sehirler.length; i++) {
    console.log("value: " + sehirler[i]+"    key: "+i);
}
