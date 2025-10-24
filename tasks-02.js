//Write a function to split a string and convert it into an array of words.
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//1 - Convert a string to an array
(string) => string.trim().split(/\s+/);

//Create a function which translates a given DNA string into RNA.
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
// 2- Dna-to-Rna
function DNAtoRNA(dna) {
    return dna.split('').filter(char => ['G', 'C', 'A', 'T'].includes(char)).map(char => char === 'T' ? 'U' : char).join('');
}

//Find the maximum and minimum value of a list
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// 3 - Maximum and Minimum value of a list
const minValue = function(list){
    return list.reduce((getminValueOfItem,item) => item < getminValueOfItem ? item : getminValueOfItem);
}

const maxValue = function(list){
    return list.reduce((getmaxValueOfItem, item) => item > getmaxValueOfItem ? item : getmaxValueOfItem);
}

// A function that can return the smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// 4 - function that can return the smallest value of an array
function min(arr, returnType) {
    const getMinValueOrIndex = arr.reduce((getminValueOfItem, item) => item < getminValueOfItem ? item : getminValueOfItem);
    const actions = {
        value: () => getMinValueOrIndex,
        index: () => arr.indexOf(getMinValueOrIndex)
    };
    return actions[returnType]?.()?? 'Error: second argument must be "value" or "index"';
}