// words with X Y Z

const fileUtils = require('./fileUtils');

async function main() {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');
        const pattern = /^(?=.*X)(?=.*Y)(?=.*Z)/;

        arr.forEach((str) => {
            if (pattern.test(str)) {
                console.log(`The string "${str}" contains the letters "X", "Y", and "Z"`);
            }
        });
    } catch (err) {
        console.error(err);
    }
}

main();
