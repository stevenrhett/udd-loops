// words with type in them

const fileUtils = require('./fileUtils');

async function countWordsWithType(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');

        // Set up storage for counting and storing words
        let count = 0;
        const wordsWithType = [];

        // Loop through each word in the array and check for "TYPE"
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes('TYPE')) {
                count++;
                wordsWithType.push(arr[i]);
            }
        }

        console.log(`Found ${count} words with the substring "TYPE":`);
        console.log(wordsWithType);
    } catch (err) {
        console.error(err);
        return [];
    }
}

countWordsWithType('sowpods.txt');
