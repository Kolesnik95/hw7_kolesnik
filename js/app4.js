let N = parseInt(prompt("Введите число:"));

if (N <= 1) {
    console.log(`${N} - не простое число`);
} else if (N % 2 !== 0) {
    console.log(`${N} - простое число`);
} else if (N % 2 === 0) {
    console.log(`${N} - не простое число`);
}