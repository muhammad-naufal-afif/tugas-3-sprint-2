var jualMobil = {
    nama : "Tompel",
    merk : "Avanza",
    tahun : 2017,
    iklan :function (){
        document.write(`BU , saya ${this.nama}, jual mobil ${this.merk}, tahun ${this.tahun} ,bekas`)
    }
}
jualMobil.iklan();