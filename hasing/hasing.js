// input array = 
// hash array initialize it to zero

let input = [1,2,3,1,2,3,5]
let n = input.length
// find number count of each element  in array
//brute
let count = 0
let element = ''
for(let i=0; i<n; i++){
    element = input[i]
    for(let j=0; j<n; j++){
        if(element === input[j]){
            count++
        }
    }
    console.log(`element ${element} count was ${count}`)
    count = 0
}

// by using hashing

let hash = Array(6).fill(0)

for(let i=0; i<n; i++){
    hash[input[i]] += 1
}
for(let i=0;i<hash.length;i++){
    console.log(`${i} count is ${hash[i]}`);
}
console.log(hash);