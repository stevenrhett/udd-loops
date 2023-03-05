//  no vowels even Y

const fileUtils = require('./fileUtils');

async function findWordsWithoutVowelsAndY(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');

        const pattern = /^[^aeiouy]*$/i;

        return arr.filter((str) => pattern.test(str));
    } catch (err) {
        console.error(err);
        return [];
    }
}

findWordsWithoutVowelsAndY('sowpods.txt')
    .then((words) => {
        console.log(`Found ${words.length} words with no vowel and not even a Y:`);
        console.log(words);
    })
    .catch((err) => {
        console.error(err);
    });
