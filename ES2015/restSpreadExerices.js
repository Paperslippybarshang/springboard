
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }
// Refactor it to use the rest operator & an arrow function:

function filterOutOdds(...numb) {
  return numb.filter((num) => num % 2 === 0)
};

// findMin
function findMin(...numb) {
  let minNum = 0;
  numb.reduce((x,y) => x < y ? minNum = x : minNum = y);
  return minNum; 
};

// mergeObjects
function mergeObjects(obj1, obj2) {
  const mergedObj = { ...obj1, ...obj2 };
  return mergedObj;
};

// doubleAndReturnArgs
function doubleAndReturnArgs(arr, ...numb) {
  const doubled = numb.map((x) => x * 2);
  const newArr = [...arr, ...doubled];
  return newArr;
};

// Slice and Dice!

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
  const randIndex = Math.floor(Math.random() * Math.floor(items.length));
  const newArr = items.filter(item => item !== items[randIndex]);
  return newArr;
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  const newArr = [...array1, ...array2];
  return newArr;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] =  val;
  return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  const newObj = { ...obj1, ...obj2 };
  return newObj
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj
}