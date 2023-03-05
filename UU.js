//Words that contain two UU's

const fileUtils = require('./fileUtils');

async function main() {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');

        arr.forEach((str) => {
            if (str.includes('UU')) {
                console.log(`The string "${str}" contains the letter "UU"`);
            }
        });
    } catch (err) {
        console.error(err);
    }
}

main();
