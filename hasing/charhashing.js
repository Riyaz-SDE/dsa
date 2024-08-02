console.log('a'.charCodeAt());
let input = 'baacdebaceb'
let hash = Array(26).fill(0)

for(let i=0; i<input.length; i++){
    hash[input[i].charCodeAt() - 'a'.charCodeAt()] += 1
    console.log(input[i].charCodeAt() - 'a'.charCodeAt());
}
console.log(hash);
console.log("Z".charCodeAt());
