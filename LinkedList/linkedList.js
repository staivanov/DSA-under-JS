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
        const newNode = {
            value: value,
            next: null
        };

        this.tail.next = new Node();
        this.tail = new Node();
        this.length++;

        return this;
    }

    prepend(value){
        const newNode = {
            value: value,
            next: this.head
        };

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        
        return this;
    }

}


