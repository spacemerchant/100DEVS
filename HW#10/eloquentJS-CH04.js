// The sum of a range

// let range = (start, end) => {
    // let array = [];
    // for (let i = start; i <= end; i++) {
    //     array.push(i)
    // }
    // return array
// };
// let sum = (arr) => {
//     let sum = 0;
//     arr.forEach( num => {sum += num });
//     return sum;
// }
// console.log(sum(range(1,10)));


let range = (start, end, step) => {
    let array = [];
    if (step > 0){
        for (let i = start; i <= end; i+= step) {
            array.push(i)
        }
        return array
    }
    if (step < 0){
        for (let i = start; i >= end; i = i + step) {
            array.push(i)
        }
        return array
    }
    if (step === undefined) {
        for (let i = start; i <= end; i++) {
            array.push(i)
        }
        return array
    }

};
let sum = (arr) => {
    let sum = 0;
    arr.forEach( num => {sum += num });
    return sum;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// 55




// Reversing an array // 






// A list // 