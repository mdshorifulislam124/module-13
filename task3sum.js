let num = 81;
let sum = 0;

while (num <= 131) {
    if (num % 2 === 0) {   //  even check
        sum += num;        //  তখনই যোগ
    }
    num++;
}

console.log("Total Even Sum:", sum);