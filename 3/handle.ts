import * as fs from 'fs';
import { Instruction } from './Instruction';
import { Coordinate } from './Coordinate';
import { stringify } from 'querystring';

function inputs(filename: string) {
    return fs.readFileSync(filename, 'utf8').toString().split(',')
}

function getCoordinates(filename: string) {
    var instructions = inputs(filename)
        .map(input => new Instruction(input))

    var coordinates = new Map()

    var start = new Coordinate(0, 0, 0)

    instructions.forEach(instruction => {
        while (!instruction.isSpent()) {
            var next = start.apply(instruction)

            //Do not want to override the minimum step
            if(!coordinates.has(next.getKey())){
                coordinates.set(next.getKey(), next)
            }
            start = next
        }
    })

    //Make sure no origin coordinates are present
    coordinates.delete((new Coordinate(0, 0)).getKey())
    return coordinates
}

function eq(c1: Coordinate, c2: Coordinate){
    return (c1.x == c2.x) && (c1.y == c2.y)
}

export function partOne(input_1, input_2) {

    var coordinates_one = getCoordinates(input_1)
    var coordinates_two = getCoordinates(input_2)

    var min_dist = Number.MAX_VALUE

    coordinates_one.forEach((coordinate: Coordinate, key: string) => {
        if (!coordinates_two.has(key)) {
            return 
        }
        min_dist = Math.min(min_dist, coordinate.manhattan(coordinates_two.get(key)))
    })

    return min_dist
}

export function partTwo(input_1, input_2) {

    var coordinates_one = getCoordinates(input_1)
    var coordinates_two = getCoordinates(input_2)

    var min_step = Number.MAX_VALUE

    coordinates_one.forEach((coordinate: Coordinate, key: string) => {
        if (!coordinates_two.has(key)) {
            return
        }
        min_step = Math.min(min_step, coordinate.step + coordinates_two.get(key).step)
    })

    return min_step
}