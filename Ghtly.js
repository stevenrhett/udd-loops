// GHTLY in words


const fileUtils = require('./fileUtils');

async function findWordsEndingInGHTLY(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');

        return arr.filter((str) => str.endsWith('GHTLY'));
    } catch (err) {
        console.error(err);
        return [];
    }
}

findWordsEndingInGHTLY('sowpods.txt')
    .then((words) => {
        console.log(`Found ${words.length} words ending in "GHTLY":`);
        console.log(words);
    })
    .catch((err) => {
        console.error(err);
    });
