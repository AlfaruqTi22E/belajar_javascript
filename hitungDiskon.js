const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== HITUNG DISKON ===");
console.log("1. Buku    = Rp20000");
console.log("2. Pulpen  = Rp10000");
console.log("3. Tas     = Rp100000");
console.log("4. Sepatu  = Rp200000");
console.log("5. Jaket   = Rp150000");

rl.question("Pilih barang (1-5): ", function(barang) {
    rl.question("Masukkan jumlah barang: ", function(jumlah) {

        let harga;

        switch (Number(barang)) {
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
                rl.close();
                return;
        }

        let totalBelanja = harga * Number(jumlah);
        let diskon = 0;

        if (totalBelanja >= 300000) {
            diskon = totalBelanja * 10 / 100;
        } else if (totalBelanja >= 100000) {
            diskon = totalBelanja * 5 / 100;
        } else if (totalBelanja >= 50000) {
            diskon = totalBelanja * 3 / 100;
        }

        let totalBayar = totalBelanja - diskon;

        console.log("\n=== HASIL ===");
        console.log("Total Belanja : Rp" + totalBelanja);
        console.log("Total Diskon  : Rp" + diskon);
        console.log("Total Bayar   : Rp" + totalBayar);

        rl.close();
    });
});