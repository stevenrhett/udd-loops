//this is the assignment for words that have a Q, but not a U

const fileUtils = require('./fileUtils');

async function findWordsWithoutQU(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');

        const pattern = /^(?!.*U).*Q(?!.*U).*$/;

        return arr.filter(str => pattern.test(str));
    } catch (err) {
        console.error(err);
        return [];
    }
}

findWordsWithoutQU('sowpods.txt')
    .then(words => {
        console.log(`Found ${words.length} words with "Q" but without "U":`);
        console.log(words);
    })
    .catch(err => console.error(err));
