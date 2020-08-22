class CircularQueue {
    constructor(size) {
      this.elements = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
  
      while (size > 0) {
        this.elements.push(null);
        size--;
      }
    }

    enqueue(element) {
        if(this.elements[this.write] === null){
            this.elements[this.write] = element;
            this.write++;

        if(this.write > this.max){
            this.write = 0;
        }
        return element;
        }
        return null;
    }

    dequeue(){
        if(this.elements[this.read] != null){
            let element = this.elements[this.read];
            this.elements[this.read] = null;
            this.read++;

            if(this.read > this.max){
                this.read = 0;
            }
            return element;
        }
        return null;
    }

    print() {
        console.log(this.elements);
    }
}

let cq1 = new CircularQueue(5);
cq1.enqueue(1);
cq1.enqueue(2);
cq1.enqueue(3);
cq1.enqueue(4);
cq1.enqueue(5);
cq1.dequeue();
cq1.enqueue(6);
cq1.print();