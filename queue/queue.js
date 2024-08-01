// queue 
// tail - T , head - H
// H-T
// adding
// H-1 2 3 4 5-T
// deleting
// X-X-H-3-4-5-T

class Queue{
    constructor(){
        this.queue = []
        this.head = 0
        this.tail = 0
    }
    enqueue(element){ // add element from queue at tail
        if(element === undefined){
            return false 
        }
        this.queue.push(element)
        this.tail++
    }
    isEmpty(){ // the size of queue
        return this.tail - this.head === 0
    }
    dequeue(){ // remove element from queue at head
        if(this.isEmpty()){
            throw Error('queue is empty')
        }
        this.queue.shift()
        this.head++
    }
    printAll(){ //prints every queue
        console.log(this.queue);
    }
}

const newQueue = new Queue()

newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
newQueue.enqueue(4)
newQueue.enqueue(5)
console.log('before deletion');
newQueue.printAll()
newQueue.dequeue()
newQueue.dequeue()
console.log('after deletion');
newQueue.printAll()
newQueue.dequeue()
newQueue.dequeue()
newQueue.dequeue()
console.log('now stack is empty');
newQueue.dequeue()
