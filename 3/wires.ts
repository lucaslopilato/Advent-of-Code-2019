import * as fs from 'fs';

var inputs = fs.readFileSync('input.txt', 'utf8').toString()
    .split(',')
    .map(s => parseInt(s, 10));