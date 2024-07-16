// {[()]}
// ({)}
// (})}
// {[()]}}

// function isBracebalnce(str){
// let arr=str.split('')
// let stack =[]
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]=='{'|| arr[i]=='('|| arr[i]=='['){
//      stack.push(arr[i])
//     }else{
//         console.log(stack[stack.length-1],arr[i]);
//         if(stack[stack.length-1]=='('){
//             if(arr[i]!=')') return false;
//           stack=stack.slice(0,stack.length-1)
//         } else if(stack[stack.length-1]=='{'){
//             if(arr[i]!='}') return false;
//             stack=stack.slice(0,stack.length-1)

//         } else if(stack[stack.length-1]=='['){
//             if(arr[i]!=']') return false;
//             stack=stack.slice(0,stack.length-1)
//         }else{
//             return false
//         }
//     }
//   }
//  if(stack.length!=0){
//     console.log("not zero");
//     return false
//  }
  
//  return true
// }

// console.log(isBracebalnce("{{{[()]}}"));

function isBraceBalance(str) {
    const stack = [];
    const pair = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of str) {
        if (pair[char]) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (pairs[top] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isBraceBalance("{{{[()]}}"));  
console.log(isBraceBalance("{[()]}"));     
console.log(isBraceBalance("({)}"));       
console.log(isBraceBalance("(})}"));       
console.log(isBraceBalance("{[()]}"));     
console.log(isBraceBalance("{[()]}]}"));   