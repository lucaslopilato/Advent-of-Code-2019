import {Direction} from './Direction'

export class Instruction {
    direction: Direction
    count: number

    constructor(input: string) {
        this.direction = this.extractDirection(input)
        this.count = parseInt(input.substring(1), 10)
    }

    extractDirection(input: string) {
        switch (input.substring(0, 1)) {
            case "U": return Direction.Up
            case "D": return Direction.Down
            case "R": return Direction.Right
            case "L": return Direction.Left
            default:
                throw new Error('Unexpected Input: ' + input)
        }
    }

    isSpent = () => this.count <= 0
    use = () => {
        if(this.isSpent()) throw new Error('Used instruction when spent')
        this.count--
    }


}