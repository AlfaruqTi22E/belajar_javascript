// Program Hitung Barang

let barang = Number(prompt("Pilih barang;\n1. Buku = 20000\n2. Pulpen = 10000\n3. Tas = 100000\n4. Sepatu = 200000\n5. Jaket = 150000"));

let jumlah = Number(prompt ("Masukan jumlah barang"));

let harga;

switch (barang) {
    case 1: 
    harga = 20000;
    break;
    case 2:
    harga = 10000;
    break;
    case 3:
    harga = 100000;
    break;
    case 4:
    harga = 200000;
    break;
    case 5:
    harga = 150000;
    break;
    default:
        console.log("Barang tidak tersedia");
}

let totalBelanja = harga * jumlah;
let diskon = 0;

if(totalBelanja >= 300000){
    diskon = totalBelanja * 10 / 100;

}else if (totalBelanja >= 100000){
    diskon = totalBelanja * 5 / 100;

}else if (totalBelanja >= 50000){
    diskon = totalBelanja * 3 / 100;
}

let totalBayar = totalBelanja - diskon;

console.log("Total Belanja : Rp" + totalBelanja);
console.log("Total Diskon : Rp" + diskon);
console.log("Total Bayar Rp" + totalBayar);