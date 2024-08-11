// Sync code for file reading
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);

console.log('Do something else');