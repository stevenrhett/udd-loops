// B + X less than 5 letters

const fileUtils = require('./fileUtils');

async function findWordsWithBX(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');

        return arr.filter((str) => {
            return str.includes('B') && str.includes('X') && str.length < 5;
        });
    } catch (err) {
        console.error(err);
        return [];
    }
}

findWordsWithBX('sowpods.txt')
    .then((words) => {
        console.log(`Found ${words.length} words with "B" and "X" and are less than 5 letters long:`);
        console.log(words);
    })
    .catch((err) => {
        console.error(err);
    });
