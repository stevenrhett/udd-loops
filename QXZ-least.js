// least common of Q, X, Z

const fileUtils = require('./fileUtils');

// Read in the text file
const data = fileUtils.readFile('sowpods.txt');

// Count the frequency of Q, X, and Z
let qCount = 0;
let xCount = 0;
let zCount = 0;

for (let i = 0; i < data.length; i++) {
    if (data[i] === 'Q' || data[i] === 'q') {
        qCount++;
    } else if (data[i] === 'X' || data[i] === 'x') {
        xCount++;
    } else if (data[i] === 'Z' || data[i] === 'z') {
        zCount++;
    }
}

// Determine which letter is the least common
if (qCount <= xCount && qCount <= zCount) {
    console.log('Q is the least common');
} else if (xCount <= qCount && xCount <= zCount) {
    console.log('X is the least common');
} else {
    console.log('Z is the least common');
}
