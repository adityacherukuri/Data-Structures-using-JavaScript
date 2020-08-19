class Stack {
    constructor(){
        this.elements = [];
    }
    push(element){
        return this.elements.push(element);
    }
    pop(){
        return this.elements.pop();
    }
    peek(){
        return this.elements[this.elements.length - 1];
    }
    isEmpty(){
        return this.elements.length === 0;
    }
    clear(){
        return this.elements = [];
    }
    printStack(){
        console.log(this.elements);
    }
}

let stack1 = new Stack();
stack1.push(6);
stack1.push(7);
stack1.push(8);
stack1.printStack();
console.log(`Top element in stack1: ${stack1.peek()}`);
console.log(`element popped: ${stack1.pop()}`);
console.log(`Top element in stack1: ${stack1.peek()}`);
console.log(`${stack1.isEmpty()}`);
stack1.clear();
stack1.printStack();
console.log(`${stack1.isEmpty()}`);
