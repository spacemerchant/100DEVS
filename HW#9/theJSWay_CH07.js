// Musketeers //
let musketeers = ["Athos", "Porthos", "Aramis"];
for (let i = 0; i < musketeers.length; i++){
    console.log(musketeers[i])
}

musketeers.unshift("D'Artagnan");

musketeers.forEach(person => console.log(person));

musketeers.pop();

for (const people of musketeers) {
    console.log(people);
}




// Sum of Values // 
const values = [3, 11, 7, 2, 9, 10]; 
let sum = 0
values.forEach( num => {
    sum += num ;
});
console.log(sum)




// // Maximum // 
// // const valuess = [3, 11, 7, 2, 9, 10];
// // let max = -Infinity;

// for (let i = 0; i < valuess.length; i++){
//     if (valuess[i] > max) {
//         max = valuess[i];
//     }
// }

// console.log(max);

const valuess = [3, 11, 7, 2, 9, 10];
let max = -Infinity; 

valuess.forEach(num => {
    if (num > max){
        max = num;
    }
    return max;
});

console.log(max);




// List of words //
let aListOfWords = () => {
    let words = [];
do {
    let newWord = prompt("Add a word to the list. Type 'stop' to stop.")
    words.push(newWord);
} 
while (words.includes('stop') != true);
words.pop()
console.log(words)
} 
aListOfWords();
