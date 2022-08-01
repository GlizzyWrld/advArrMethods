function hasOddNumber(arr){
    return arr.some(function(num){
        return num % 2 === 1;
    })
    return false
}

function hasAZero(int){
    return int.toString().split('').some(function(num){
        return num.includes(0);
    })
    return false
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(num){
        return num % 2 === 1;
    })
    return false
}

function hasNoDuplicates(arr){
    return arr.every(function(num){
        return arr.indexOf(num) === arr.lastIndexOf(num);
    })
}

function hasCertainKey(arr, key){
     return arr.every(function(val){
        return key in val
    })
}

function hasCertainValue(arr, key, value){
    return arr.every(function(val){
        return val[key] === value
    })
}