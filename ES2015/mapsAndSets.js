// What does the following code return?
// new Set([1,1,2,2,3,4])

// return Set(4) {1,2,3,4}


// What does the following code return?
// [...new Set("referee")].join("")

// return "ref"


// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// return Map(2) {Array(3) => true, Array(3) => false}

// hasDuplicate()
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = (arr) => {
  const newArr = [...new Set(arr)];
  return arr.length !== newArr.length
}


// vowelCount()
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

const vowel = new Set(['a','e','i','o','u'])

const vowelCount = (str) => {
  const newArr = [...str.toLowerCase()]
  const vowelMap = new Map();
  const onlyVowel = newArr.filter(x => vowel.has(x.toLowerCase()));

  onlyVowel.forEach(y => {
    if (!vowelMap.has(y)) {
      vowelMap.set(y, 1);
    } else {
      vowelMap.set(y, (vowelMap.get(y) + 1))
    }
  })
  return vowelMap
}