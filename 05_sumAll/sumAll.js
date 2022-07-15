const sumAll = (i, j) => {
    let sum = 0;
    if (i<j){
        for (let k=i; k<=j; k++){
            sum += k;
        }
    }
    if (i>j){
        for (let k=j; k<=i; k++){
            sum += k;
        }
    }
    if (i<0 || j<0 || !Number.isInteger(i) || !Number.isInteger(j)){ 
        sum = 'ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
