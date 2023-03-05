// no vowel longest

const fileUtils = require('./fileUtils');

async function findLongestWordWithoutVowels(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const arr = data.split('\n');

        let longestWord = '';
        for (let i = 0; i < arr.length; i++) {
            const word = arr[i];
            if (!/[aeiou]/i.test(word)) { // check if word contains no vowels
                if (word.length > longestWord.length) {
                    longestWord = word;
                }
            }
        }

        return longestWord;
    } catch (err) {
        console.error(err);
        return null;
    }
}

findLongestWordWithoutVowels('sowpods.txt')
    .then((word) => {
        console.log(`The longest word without vowels is: ${word}`);
    })
    .catch((err) => {
        console.error(err);
    });
