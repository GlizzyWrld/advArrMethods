function extractValue(arr, key){
    return arr.reduce(function(accum, next){
        accum.push(next[key]);
        return accum
    }, []);
}

function vowelCount(str){
    let splitStr = str.split('');
    const vowels = 'aeiou';
    return splitStr.reduce(function(accum, next){
        let lowerCased = next.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1){
            if(accum[lowerCased]){
                acc[lowerCased]++;
            }
            else {
                accum[lowerCased] = 1;
            }
        }
        return accum;
    }, {});
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accum, next, idx){
        accum[idx][key] = value;
        return accum
    }, arr);
}


function isEven(val){
    return val % 2 === 0;
  }

function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }

function partition(arr, callback){
    return arr.reduce(function(accum, next){
        if(callback(next)){
            accum[0].push(next)
        }
        else{
            accum[1].push(next)
        }
        return accum
    }, [[], []]);
}