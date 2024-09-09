import { Node } from './node.js';

export class LinkedList {

    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }
}


