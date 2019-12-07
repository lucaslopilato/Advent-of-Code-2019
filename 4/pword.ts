
export function adj(n:number) {
    var previous = -1
    while(n > 0){
        var current = n % 10

        if(current === previous){
            return true
        }

        previous = current
        n = Math.floor(n / 10)
    }
    return false
}

export function noDec(n: number){
    var previous = Number.MAX_VALUE
    while(n > 0){
        var current = n % 10

        if(current > previous){
            return false
        }

        previous = current
        n = Math.floor(n/10)
    }
    return true
}

function partOne(current: number, limit: number) {
    
    var total_possible = 0

    while(current <= limit){
    
        if(noDec(current) && adj(current)){
            total_possible++
        }
        current++
    }

    return total_possible
}

console.log('Part One: ' + partOne(134564, 585159))