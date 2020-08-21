class PriorityQueue{
    constructor(){
        this.elements = [];
    }
    enqueue(element){
        if(this.elements.length === 0){
            this.elements.push(element);
        } else {
            for(let i = 0;i < this.elements.length; i++){
                if(element[1] < this.elements[i][1]){
                    return this.elements.splice(i,0,element);
                }
            }
            return this.elements.push(element);
        }
    }
    dequeue(){
        let dequeuedElement = this.elements.shift();
        return dequeuedElement[0];
    }
    size(){
        return this.elements.length;
    }
    front(){
        return this.elements[0][0];
    }
    isEmpty(){
        return this.elements.length === 0;
    }
    clear(){
        return this.elements = [];
    }
    print(){
        console.log(this.elements);
    }
}

let pq1 = new PriorityQueue();
pq1.enqueue(['Aditya',2]);
pq1.enqueue(['Mrudula',1]);
pq1.enqueue(['Vintt',3]);
pq1.enqueue(['Lalitha',3]);
pq1.enqueue(['Teju',2]);
pq1.enqueue(['Krishx',1]);
pq1.enqueue(['Sandeep',2]);
console.log(pq1.size());
pq1.print();
console.log(`Front element in the priorityqueue1: ${pq1.front()}`);
console.log(`element dequeued: ${pq1.dequeue()}`);
console.log(`front element in priorityqueue1: ${pq1.front()}`);
console.log(`${pq1.isEmpty()}`);
pq1.clear();
pq1.print();
console.log(`${pq1.isEmpty()}`);
