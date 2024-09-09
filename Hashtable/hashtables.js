'use stricts'

let user = {
    name: 'Omi',
    age: 42,
    magic: true,
    attack: 99,

    scream: function () {
        console.log('Wiiiiiiiiiiin!')
    }
};

user.age
user.spell
user.scream

class HashTable {

    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) {
        let address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);

        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucker = this.data[address];

        if (currentBucker) {
            for (let i = 0; i < currentBucker.length; i++) {
                if (currentBucker[i][0] === key) {
                    return currentBucker;
                }
            }
        }

        return undefined;
    }

    
    key() {
        const keysArray = [];

        for (let i = 0; i < data.length; i++) {

            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }

        return keysArray;
    }
}

const myTashtable = new HashTable(20);
myTashtable.set('apples', 500);
myTashtable.set('apples');
myTashtable.set('grapes');