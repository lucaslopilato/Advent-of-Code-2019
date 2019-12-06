import * as fs from 'fs';
import { strict } from 'assert';

function partOne(filename: string, noun: number, verb: number){
    var inputs = fs.readFileSync(filename, 'utf8').toString()
        .split(',')
        .map(s => parseInt(s, 10));

    //Set Program Parameters
    inputs[1] = noun;
    inputs[2] = verb;

    var first_operand_index = (i: number) => inputs[i + 1];
    var second_operand_index = (i: number) => inputs[i + 2];
    var target_index = (i: number) => inputs[i + 3];
    var first_operand = (i:number) => inputs[first_operand_index(i)];
    var second_operand = (i:number) => inputs[second_operand_index(i)];

    for(var _i=0; _i < inputs.length; _i+=4){
        
        var op_code = inputs[_i];

        switch (op_code) {
            case 99:
                return inputs[0];
                break;

            case 1:
                inputs[target_index(_i)] = first_operand(_i) + second_operand(_i);
                break;
            case 2:
                inputs[target_index(_i)] = first_operand(_i) * second_operand(_i);
                break;
            default:
                throw "Unexpected code: " + op_code;
        }
    }
}

function partTwo(target: number){

    //Perform brute force search
    for(var noun=0; noun<100; noun++){
        for(var verb=0; verb<100; verb++){
            
            var result = partOne('input.txt', noun, verb);
            if(result == target){
                console.log('Part 2 noun' + String(noun));
                console.log('Part 2 verb' + String(verb));
            }
        }
    }
}

//console.log(partOne('test.txt'));

//Part one doesnt set parameters since I set them in input
console.log('Part One: ' + partOne('input.txt', 12, 2));
partTwo(19690720);
