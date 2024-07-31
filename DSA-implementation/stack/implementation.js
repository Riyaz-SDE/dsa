class stack{
    constructor(data){
        if(data){
            this.arr = data
        }else{
            this.arr = []
        }
    }
    isEmpty(){
        return this.arr.length === 0
    }
    add(element) {
        if(element === undefined) return 'not valid'
        this.arr.push(element)
    }
    remove(){
        if(this.isEmpty()) return 'stack is empty'
        return this.arr.pop()
    }
    peek(){
        return this.arr[this.arr.length - 1]
    }
    getAll(){
        let res = ''
        for(let i  =this.arr.length-1; i>=0; i--){
            res  = this.arr[i] + res
        }
        return res
    }
    clear(){
        while(this.arr.pop()){

        }
        return 'clear'
    }
}

var newStack = new stack()
newStack.add(1)
newStack.add(2)
newStack.add(3)
console.log(newStack.getAll());
console.log(newStack.remove());
console.log(newStack.peek());
console.log(newStack.getAll());
console.log(newStack.clear());
console.log(newStack.getAll());
let x = [1,2,3,4]
var newStack = new stack(x)
console.log(newStack.getAll());
console.log(newStack.remove());
console.log(x);
console.log(newStack.getAll());
