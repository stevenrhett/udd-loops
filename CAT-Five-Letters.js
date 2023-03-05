// CAT in five-letter words

const fileUtils = require('./fileUtils');

async function findWordsWithCAT(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');

        return arr.filter(str => str.includes('CAT') && str.length === 5);
    } catch (err) {
        console.error(err);
        return [];
    }
}

findWordsWithCAT('sowpods.txt')
    .then(words => {
        console.log(`Found ${words.length} words containing "CAT" and are exactly 5 letters long:`);
        console.log(words);
    })
    .catch(err => console.error(err));
