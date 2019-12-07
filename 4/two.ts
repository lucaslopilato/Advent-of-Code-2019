import { noDec } from "./pword"

export function adj2(n: number) {
    var values = []
    while (n > 0) {
        var current = n % 10

        if (current != values[0]) {

            if (values.length == 2) {
                return true
            }

            //Otherwise just clear the run
            values = []
        }
        values.push(current)

        n = Math.floor(n / 10)
    }
    return values.length == 2
}

//Find the number of non-zero digits in a number
export function numZero(n: number){
    var places = 0
    while(n >= Math.pow(10, places)){
        places++
    }
    return places
}

function partTwo(){
    var total_possible = 0

    for(var _i = 134564; _i<=585159; _i++){

        if(adj2(_i) && noDec(_i)){
            total_possible++
        }
    }

    return total_possible
}

console.log('Part Two: ' + partTwo())
