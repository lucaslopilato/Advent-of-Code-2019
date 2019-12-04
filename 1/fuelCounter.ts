import * as fs from 'fs';

var calcFuel = (val) => Math.floor(val / 3) - 2;
var totalFuel = (acc, mass) => acc + fuelForFuel(calcFuel(mass));

function fuelForFuel(fuel){
    var fuelNeeded = calcFuel(fuel)
    
    //No Recursion if 0 or negative fuel needed
    fuelNeeded = fuelNeeded <= 0 ? 0 : fuelForFuel(fuelNeeded);
    
    return fuel + fuelNeeded;
}

function fuelCounter() {
    //Read File and Split by newline
    return fs.readFileSync('input.txt', 'utf8').toString().split('\n')

        //Map all strings to integers
        .map(s => parseInt(s, 10))

        //Reduce and apply the fuel formula
        .reduce(totalFuel, 0);
}

console.log('2: ' + fuelCounter());
