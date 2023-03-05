// No E or A words

const fileUtils = require('./fileUtils');

async function findWordsWithoutEA(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');

        return arr.filter(str => !str.includes('E') && !str.includes('A') && str.length >= 15);
    } catch (err) {
        console.error(err);
        return [];
    }
}

findWordsWithoutEA('sowpods.txt')
    .then(words => {
        console.log(`Found ${words.length} words with no "E" or "A" and are at least 15 letters long:`);
        console.log(words);
    })
    .catch(err => console.error(err));
