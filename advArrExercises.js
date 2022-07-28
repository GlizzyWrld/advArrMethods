// forEach 
function doubleValues(arr) {
    let newArr = [];
     arr.forEach(function(val){
         newArr.push(val * 2)
     })
     return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val)
        }
    })
    return newArr;
}

function showFirstandLast(arr){
    let newArr = [];
    arr.forEach(function(word){
        newArr.push(word[0] + word[word.length -1])
    })
    return newArr;
}

function addKeyAndValue(arr, key, value){
    arr.forEach(function(val){
        val[key] = value;
    })
    return arr;
}

function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";

  splitArr.forEach(function(letter) {
    let lowerCasedLetter = letter.toLowerCase()
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}

// map 
function doubleValuesWithMap(arr){
    let newArr = [];
    arr.map(function(nums){
        newArr.push(nums * 2)
    })
    return newArr;
}

function valTimesIndex(arr){
    let newArr = [];
    arr.map(function(nums, i){
        newArr.push(nums * i)
    });
    return newArr;
}

function extractKey(arr, key){
    return arr.map(function(val){
        return val[key]
    });
}
    
function extractFullName(arr){
    return arr.map(function(val){
        return val.first + " " + val.last
    })
}


// filter
function filterByValue(arr, key){
    return arr.filter(function (val){
        return val[key] !== undefined;
    })
}

// find
function find(arr, val){
    return arr.filter(function(num){
        if(num === val){
            return num;
        }
        else {
            return undefined;
        }
    })
}

function findInObj(arr, key, val){
    return arr.filter(function(name){
        return name[key] === val;
    })[0];
}

function removeVowels(str){
    const vowels = 'aeiou';
    return str.toLowerCase().split("").filter(function(val){
        return vowels.indexOf(val) === -1;
    })
    .join("")
}  

function doubleOddNumbers(arr){
    return arr.filter(function(num){
        if(num % 2 !== 0){
            return num 
        }
    })
    .map(function(num){
        return num * 2
    });
}