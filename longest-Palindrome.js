// longest Palindromic subsequence


const fileUtils = require('./fileUtils');

async function findLongestPalindrome(filename) {
    try {
        const data = fileUtils.readFile('sowpods.txt');
        const words = data.split('\n');

        let longestPalindrome = '';

        for (const word of words) {
            if (isPalindrome(word) && word.length > longestPalindrome.length) {
                longestPalindrome = word;
            }
        }

        return longestPalindrome;
    } catch (err) {
        console.error(err);
        return '';
    }
}

function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

findLongestPalindrome('sowpods.txt')
    .then((longestPalindrome) => {
        console.log(`The longest palindrome is "${longestPalindrome}"`);
    })
    .catch((err) => {
        console.error(err);
    });
