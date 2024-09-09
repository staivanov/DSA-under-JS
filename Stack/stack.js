import { Node } from './node.js';

export class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
       return this.top;
    }


    push(value) {
        let newItem = new Node(value);

        if (this.length === this.isEmpty()) {

            this.top = newItem;
            this.bottom = newItem;
        }
        else {
            let  pointer = this.top;
            this.top = newItem;
            this.top.next = pointer;
        }

        this.length++;

        return this;
    }


    pop() {
        if(!this.top){
            return null;
        }

        this.top = this.top.next;
        this.length--;

        return this;
    }

    isEmpty() {
        let isStackEmpty = false;

        if (this.length == 0) {
            return isStackEmpty = true;
        }

        return isStackEmpty;
    }
}