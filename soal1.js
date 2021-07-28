let motor = {
    merk : "Honda",
    model : "Supra",
    warna : "Abu-abu",
    jalan :function(gas){
        console.log("Saya mau pakai motor " + gas + " ke pasar");
    }
    }


let sepeda = {
    merk : "Polygon",
    modelSepeda : "BMX",
    warna : "Merah",
    mengayuh:function (jjs){
        console.log("Aku mau jalan sore memakai " + jjs);
    }
}
 

let laptop = {
     merk : "ASUS",
     tipe : "X540L",
     warna : "Gold",
     pakai :function(use){
         console.log("Laptopku " + use);
     }
 }
 

 let softDrink = {
    merk : "Mizone",
    rasa : "Apel",
    harga : 5000,
    beli :function(buy) {
        console.log("Pilih minuman : "+ buy);
    }
}


 let bis = {
     namaTrayek : "Sinar Jaya",
     jurusan : "Jakarta - Cilacap",
     harga : 150000,
     naik  :function(pergi){
         console.log("Naik bis " + pergi);
     }
 }


 console.log(motor);
 console.log(motor.jalan("Supra"));
 console.log(sepeda);
 console.log(sepeda.mengayuh("sepeda Polygon BMX"));
 console.log(laptop);
 console.log(laptop.pakai("Asus"));
 console.log(softDrink);
 console.log(softDrink.beli("Mizone"));
 console.log(bis);
 console.log(bis.naik("Sinar Jaya"));