// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {

        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {

        const newNode = new DoublyLinkedNode(val);

        if(this.length > 0) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    removeFromHead() {

        if(!this.head) return;
        // if(!this.length) return undefined;

            let oldHead = this.head;

            this.head = oldHead.next;

            if(this.head)this.head.prev = null;
            //console.log(this.head);
            this.length--;

            return oldHead.value;


        // if (!this.head) return;

        // const oldHead = this.head;
        // this.head = oldHead.next;
        // if (this.head) this.head.prev = null;

        // this.length--;

        // return oldHead.value;

    }

    removeFromTail() {

        if(!this.tail) return;

        let oldTail = this.tail;
        this.tail = oldTail.prev;

        if(this.tail) this.tail.next = null;

        this.length--;

        return oldTail.value;
    }

    peekAtHead() {

        if(!this.length) return undefined;
        return this.head.value;
    }

    peekAtTail() {
        if(!this.length) return undefined;
        return this.tail.value;    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
