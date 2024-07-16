function tribonichi(i){
    if(i==0) return 0;
    if(i==1) return 1;
    if(i==2) return 1
    return tribonichi(i-1)+tribonichi(i-2)+tribonichi(i-3);
}
// 0 1 1 2 3 5
//0 1 1 2 4 7 13 
let n=10
for(let i=0;i<n;i++)
console.log(tribonichi(i))

function fibonachi(i){
    if(i==0) return 0;
    if(i==1) return 1;
    return fibonachi(i-1)+fibonachi(i-2);
}
// 0 1 1 2 3 5
//0 1 1 2 4 7 13 
for(let i=0;i<n;i++)
console.log(fibonachi(i))