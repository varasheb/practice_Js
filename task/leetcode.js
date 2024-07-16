// ?
/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    c=customers
    avg=0
    t=0
    p=[]
    wating=[]
    for(let i=0;i<c.length;i++){
        t=c[i]
        if(i==0 || p[p.length-1]<t[0]){
        p.push(t[0]+t[1])
        }else{
            p.push(p[p.length-1]+t[1])
        }
        wating.push(p[p.length-1]-t[0])
    }
   avg= wating.reduce((a,b)=>a+b)/wating.length
    return avg
};

//?

/**
 * @param {number[][]} grid
 * @return {number}
 */

var cherryPickup = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0).map(() => new Array(cols).fill(-1)));
    
    // Initialize the dp for the bottom row
    for (let j1 = 0; j1 < cols; j1++) {
        for (let j2 = 0; j2 < cols; j2++) {
            if (j1 === j2) {
                dp[rows - 1][j1][j2] = grid[rows - 1][j1];
            } else {
                dp[rows - 1][j1][j2] = grid[rows - 1][j1] + grid[rows - 1][j2];
            }
        }
    }

    function getMaxCherries(i, j1, j2) {
        if (i < 0 || j1 < 0 || j2 < 0 || j1 >= cols || j2 >= cols) return 0;
        if (dp[i][j1][j2] !== -1) return dp[i][j1][j2];
        
        let result = 0;
        for (let newJ1 of [j1 - 1, j1, j1 + 1]) {
            for (let newJ2 of [j2 - 1, j2, j2 + 1]) {
                result = Math.max(result, getMaxCherries(i + 1, newJ1, newJ2));
            }
        }
        
        if (j1 === j2) {
            result += grid[i][j1];
        } else {
            result += grid[i][j1] + grid[i][j2];
        }
        
        dp[i][j1][j2] = result;
        return result;
    }
    return getMaxCherries(0, 0, cols - 1);
};