class Queue {
    constructor(){
        this.elements = [];
    }
    enqueue(element){
        return this.elements.push(element);
    }
    dequeue(){
        return this.elements.shift();
    }
    front(){
        return this.elements[0];
    }
    isEmpty(){
        return this.elements.length === 0;
    }
    clear(){
        return this.elements = [];
    }
    printQueue(){
        console.log(this.elements);
    }
}

let queue1 = new Queue();
queue1.enqueue(6);
queue1.enqueue(7);
queue1.enqueue(8);
queue1.printQueue();
console.log(`Front element in queue1: ${queue1.front()}`);
console.log(`element dequeued: ${queue1.dequeue()}`);
console.log(`front element in queue1: ${queue1.front()}`);
console.log(`${queue1.isEmpty()}`);
queue1.clear();
queue1.printQueue();
console.log(`${queue1.isEmpty()}`);
