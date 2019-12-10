import {Direction} from './Direction'
import { Instruction } from './Instruction'

function manhattan(c1: Coordinate){
    return Math.abs(c1.x - 0) + Math.abs(c1.y - 0)
}

export class Coordinate {
    x: number
    y: number
    step: number
    
    constructor(x: number, y: number, step?: number){
        this.x = x
        this.y = y
        this.step = step
    }

    manhattan = (other: Coordinate) => manhattan(this)

    apply(inst: Instruction){
        var new_x = this.x
        var new_y = this.y

        //Use up one count of instruction
        inst.use()

        switch(inst.direction){
            case(Direction.Up):
                new_y++
                break
            case(Direction.Down):
                new_y--
                break
            case(Direction.Left):
                new_x--
                break
            case(Direction.Right):
                new_x++
                break
        }

        return new Coordinate(new_x, new_y, this.step + 1)
    }

    getKey(){
        return this.x + ',' + this.y
    }

    eq(other: Coordinate){
        return this.x == other.x && this.y == other.y

    }
}




