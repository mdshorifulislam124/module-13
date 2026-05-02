// let num = 81;
// let sum = 0;

// while (num <= 131) {
//     if (num % 2 === 0) {   //  even check
//         sum += num;        //  তখনই যোগ
//     }
//     num++;
// }

// console.log("Total Even Sum:", sum);



let num = 206;
let sum = 0;

while (num <= 311) {
    if (num % 2 !== 0) {   //  Odd check
        sum += num;        //  তখনই যোগ
    }
    num++;
}

console.log("Total Odd Sum:", sum);