function holler() {
    console.log('HEY YOU!')
}

const whisper = function(){
    console.log('psst I have a secret');
};

function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;
}

const mathFuncs = [add, subtract, multiply, divide]

setTimeout(whisper, 4000);

function doMath(a,b,mathFunc){
   return mathFunc(a,b)
}

doMath(3,14, function(a,b){
    console.log(a ** b)
})

function doAllMath(a,b,mathFuncs){
    for(let func of mathFuncs){
        console.log(func(a,b))
    }
}

// for each

const colors = ['teal', 'cyan', 'peach', 'purple'];

function yell(val, i) {
    const caps = val.toUpperCase();
    console.log(`At index ${i}, ${caps} `)
}

colors.forEach(yell);

const prices = [30.99, 19.99, 2.5, 99.0]
let total = 0;
prices.forEach(function (price){
    total += price;
});
console.log(total);


function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        callback (arr[i]);
    }
}

myForEach(colors, function(color){
    console.log(color.toUpperCase());
})

// map

const numbers = [21, 37, 64, -99, 142]
const negatives = numbers.map(function(num){
    return num * -1
})

const doubles = numbers.map(function(num){
    console.log(num * 2);
})

const todos = [
    {
        id: 1,
        text: 'walk the dog',
        priority: 'high'
    },
    {
        id: 2,
        text: 'walk the chickens',
        priority: 'medium'
    },
    {
        id: 3,
        text: 'feed the cats',
        priority: 'low'
    },
    {
        id: 4,
        text: 'put out the fire in my garage',
        priority: 'very high'
    }
];

const todoText = todos.map(function(todo){
    return todo.text;
});

const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a){
    return a.href;
})

// writing my own map

function myMap(arr, callback){
    const mappedArray = [];
    for(let i = 0; i < arr.length; i++){
        const val = callback(arr[i], i, arr);
        mappedArray.push(val);
    }
    return mappedArray;
}

const priorityMap = myMap(todos, function(todo){
    return todo.priority;
});

const repeatedStrings = myMap(['a', 'b', 'c', 'd', 'e'], function(str, idx){
   return str.repeat(idx);
})

// filter
const words = [
    'cyptian',
    'gyggbjnbjn',
    'gyggbjjn',
    'coolcat',
    'uyggbjnjjn',
    'gyggbjbjbjjn',
    'gyggbjjnjgfhf'
];

const containsVowel = function(word) {
    for (let char of word) {
        if(isVowel(char)) return true;
    }
    return false;
}

const isVowel = function(char) {
    return 'aeiou'.indexOf(char) !== -1;
};

const mediumWords = words.filter(function(word){
    return word.length >= 8
})

const cOruWords = words.filter(function(w){
    return w[0] === 'u' || w[0] ==='c'
});

const containVowels = words.filter(containsVowel);

const noVowels = words.filter(function(word){
    return !containsVowel(word)
});

const allCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

const checked = allCheckboxes.filter(function(box){
    return box.checked;
});

const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
})

function extractCompletedTodos(){
    const allCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

    return allCheckboxes.filter(function(box){
        return box.checked;
    })
    .map(function(checkbox){
            return checkbox.parentElement.innerText;
        })
}

// writing my own filter
function myFilter(arr, callback){
    const filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

const shorties = myFilter(words, function(word){
    return word.length <=10;
})

const everyOtherWord = myFilter(words, function(word, i){
    return i % 2 === 0
})

//  some and every
const overFive = words.some(function(word){
    return word.length > 5;
})

words.some(function(word){
    return word.indexOf('ca') !== -1
})

words.every(function(word){
    return word.length >= 5;
})

function mySome(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) return true;
    }
    return false;
}
function myEvery(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], i, arr)) return false;
    }
    return true;
}