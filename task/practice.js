// function with 2 argument (string,sizeof String )

let str="  my name is 1234@  varshab Kanthi";
let length=str.length;

// function correction(str,len){
//     s=str.trim();
//     let arr=[];
//     let sub=""
//     let newstr=""
//     for(let i=0;i<len;i++){
//         let ch=s.charAt(i);
//         if(ch!==' '){
//             console.log(ch)
//             sub+=ch
//         }
//         if(ch==' '){
//             arr.push(uppperCase(sub))
//             if(i<len-1){
//             newstr=newstr+uppperCase(sub)+ " "
//             }else{
//             newstr=newstr+uppperCase(sub)
//             }
//             sub=''
//         }
//     }
// console.log(newstr);
// }
// function uppperCase(word){
//     let str=''
//     let Upper=[['A','a'],['B','b'],['C','c'],['D','d'],['E','e'],['F','f'],['G','g'],['H','h'],['I','i'],['J','j'],['K','k'],['L','l'],['M','m'],['N','n'],['O','o'],['P','p'],['Q','q'],['R','r'],['S','s'],['T','t'],['U','u'],['V','v'],['W','w'],['X','x'],['Y','y'],['Z','z']];
//     for(let i=0;i<word.length;i++){
//         let ch=word.charAt(i);
//         if(i==0){
//             for(let j=0;j<Upper.length;j++){
//                 if(ch==Upper[j][1])
//                 {   ch=Upper[j][0]
//                     break;
//                 }

//             }
//         }
//         str+=ch;
//     }
//     return str

// }
// console.log(uppperCase("hell0"));
// console.log('a'.charCodeAt()-32);
// console.log(String.fromCharCode(65));

function correction(str,len){
   let newstr='';
   let prev=null;
     for(s of str){
        if(!prev||prev==' '){
         let ch=s.charCodeAt()
         if(s>'a' && s<'z')
          ch-=32;
         newstr+=String.fromCharCode(ch)
        }else{
         newstr+=s
        }
        prev=s
     }
 console.log(newstr);
}

correction(str,length)
