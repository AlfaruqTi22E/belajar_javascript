const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanyaEmail() {
    return new Promise((resolve) => {
        input.question("Masukkan email: ", resolve);
    });
}

async function main() {
    const polaEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let email = "";

    while (!polaEmail.test(email)) {
        email = (await tanyaEmail()).trim();

        if (!polaEmail.test(email)) {
            console.log(
                "Email salah! Format harus menggunakan @gmail.com.\n"
            );
        }
    }

    console.log("Email valid!");
    input.close();
}

main();