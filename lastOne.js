//  letters that don't repeat in the array
const fileUtils = require('./fileUtils');
const data = fileUtils.readFile('sowpods.txt');
const words = data.split('\n');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const nonConsecutiveLetters = [];

for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    const pattern = new RegExp(`${letter}{2,}`, 'i');
    const hasConsecutiveLetters = words.some((word) => pattern.test(word));
    if (!hasConsecutiveLetters) {
        nonConsecutiveLetters.push(letter.toUpperCase());
    }
}

console.log(`Letters that never appear consecutively: ${nonConsecutiveLetters.join(', ')}`);
