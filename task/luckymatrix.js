
var luckyNumbers = function (matrix) {
    const minlist=[]
    const maxlist=[]
    let m=matrix.length
    let n=matrix[0].length
    for (let i=0;i<m;i++) {
        let min=matrix[i][0]
        let max=matrix[0][i]
        for (let j=0;j<n;j++) {
           if(min>matrix[i][j])
            min=matrix[i][j]
        }
        for (let j=0;j<m;j++) {
          if(max<matrix[j][i])
            max=matrix[j][i]
        }
        minlist.push(min)
        maxlist.push(max)
    }
        console.log(minlist,maxlist)
    let lucky=[]
    maxlist.forEach((val)=>{
     if(minlist.includes(val))
        lucky.push(val)
    })
    console.log(lucky)
    return lucky

};

// luckyNumbers([[3,7,8],[9,11,13],[15,16,17]])
luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]])