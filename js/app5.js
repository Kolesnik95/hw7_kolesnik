

let inputNumber = parseInt(prompt("Введите целое число:"));

let N = inputNumber;
while (N % 3 === 0) {
    N = N / 3;
}

if (N === 1) {
    console.log(inputNumber + ' можно получить, подняв число 3 до степени');
} else {
    console.log(inputNumber + ' нельзя получить, подняв число 3 до  степени');
}
