// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
        // const newNode = new SinglyLinkedList(val);
        // if(!this.head) {
        //     this.head = newNode;
        //     this.length ++;
        //     return this.length;
        // }
        // newNode.next = this.head;
        // this.head = newNode;

        const newNode = new SinglyLinkedNode(val)
        newNode.next = this.head;
        this.head = newNode
        this.length++
        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {

        if(!this.length) return undefined;
        this.length--;
        const oldHead = this.head;
        this.head = oldHead.next;

        return oldHead;
    }

    removeFromTail() {

        //if there is an empty list, return undefined because there is no tail
        if(!this.length) return undefined;

        //if one element in list, set head to null and return
        if(this.length === 1) {
           this.length--;
            this.head = null;
            return this.head;

        }

        //iterate through linked list, stop at second to last
        //set second to last.next to null
        //return last
        if(this.head){

            this.length--;

            let current = this.head;

            while(current.next.next) {
                current = current.next;
            }

            const oldTail = current.next;
            current.next = null;

            return oldTail;
        }

    }

    peekAtHead() {
        if(!this.length) return undefined;

        return this.head.value;
    }

    print() {

        if(!this.length) return;

        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.next;
        }

    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
