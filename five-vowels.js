// five vowel words

const fileUtils = require('./fileUtils');

async function findWordsWithAllVowels(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');

        return arr.filter((str) => {
            return str.includes('a') && str.includes('e') && str.includes('i') && str.includes('o') && str.includes('u');
        });
    } catch (err) {
        console.error(err);
        return [];
    }
}

findWordsWithAllVowels('sowpods.txt')
    .then((words) => {
        console.log(`Found ${words.length} words with all five vowels:`);
        console.log(words);
    })
    .catch((err) => {
        console.error(err);
    });
