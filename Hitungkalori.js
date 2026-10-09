const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(pertanyaan) {
    return new Promise((resolve) => {
        input.question(pertanyaan, resolve);
    });
}

async function main() {
    console.log("=== PROGRAM HITUNG KALORI ===");

    const lari = Number(await tanya("Durasi lari (menit): "));
    const pushUp = Number(await tanya("Durasi push-up (menit): "));
    const plank = Number(await tanya("Durasi plank (menit): "));

    const kaloriLari = (lari / 5) * 60;
    const kaloriPushUp = (pushUp / 30) * 200;
    const kaloriPlank = plank * 5;

    const totalKalori = kaloriLari + kaloriPushUp + kaloriPlank;

    console.log("\n=== HASIL PERHITUNGAN ===");
    console.log(`Kalori lari    : ${kaloriLari} kalori`);
    console.log(`Kalori push-up : ${kaloriPushUp} kalori`);
    console.log(`Kalori plank   : ${kaloriPlank} kalori`);
    console.log(`Total kalori   : ${totalKalori} kalori`);

    input.close();
}

main();