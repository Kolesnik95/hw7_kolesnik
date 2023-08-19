let start = 1;
let end = 100;
let N = prompt('digit');

for (let i = start; i <= end; i++){
    if (i**2 < N){
        console.log(i)
    }
}
