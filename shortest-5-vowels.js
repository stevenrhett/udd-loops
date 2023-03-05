// shortest words with 5 vowels


const fileUtils = require('./fileUtils');

async function findShortestWordWithAllVowels(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const words = data.split('\n');

        let shortestWord = null;

        // iterate through each word
        for (let i = 0; i < words.length; i++) {
            const word = words[i];

            // check if word contains all 5 vowels
            if (word.includes('a') && word.includes('e') && word.includes('i') && word.includes('o') && word.includes('u')) {

                // if shortestWord is null or current word is shorter than shortestWord, set shortestWord to current word
                if (shortestWord === null || word.length < shortestWord.length) {
                    shortestWord = word;
                }
            }
        }

        return shortestWord;
    } catch (err) {
        console.error(err);
        return null;
    }
}

findShortestWordWithAllVowels('sowpods.txt')
    .then((shortestWord) => {
        console.log(`The shortest word containing all 5 vowels is "${shortestWord}".`);
    })
    .catch((err) => {
        console.error(err);
    });
