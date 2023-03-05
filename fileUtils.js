const fs = require('fs');

function readFile(filename) {
    return fs.readFileSync(filename, 'utf-8');
}

module.exports = {
    readFile
};
