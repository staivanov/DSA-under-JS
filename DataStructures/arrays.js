'use stricts'

//Arrays are stored in continuous memory
//lookup O(1), push O(1), insert O(n), delete O(n)

const letters = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage

letters.push('e');
letters.pop();
console.log(letters);

//Unshift
letters.unshift('x');
console.log(letters);

//Splice
letters.splice(2);

//Static vs dynamic arrays.
//Static arr are fixed in size.
//Dynamic arrays are a data structure that allows its size to be changed dynamically during program execution.

//reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };


//instantiation
class Player {

    constructor(name, type) {
        name = name;
        type = type;
    }

    introduce() {
        console.log(`Hi i am ${this.name}. I am a ${this.type}`);
    }

}

class Tank extends Player {

    constructor(name, type) {
        super(name, type)
    }

    play(){
        console.log(`WEEEEEEEE I am a ${this.type}`);
    }
};

const tank1 = new Tank('Oni', 'Attacker');
const tank2 = new Tank('Toranaga', 'Defender');


