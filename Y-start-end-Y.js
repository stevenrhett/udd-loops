// start and end wth Y

const fileUtils = require('./fileUtils');

async function findWordsStartingAndEndingWithY(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');

        return arr.filter((str) => {
            const length = str.length;
            return str.charAt(0) === 'Y' && str.charAt(length - 1) === 'Y';
        });
    } catch (err) {
        console.error(err);
        return [];
    }
}

findWordsStartingAndEndingWithY('sowpods.txt')
    .then((words) => {
        console.log(`Found ${words.length} words that start and end with "Y":`);
        console.log(words);
    })
    .catch((err) => {
        console.error(err);
    });
