import * as fs from 'fs';

function partOne(filename: string){
    var inputs = fs.readFileSync(filename, 'utf8').toString()
        .split(',')
        .map(s => parseInt(s, 10));

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

//console.log(partOne('test.txt'));
console.log(partOne('input.txt'));