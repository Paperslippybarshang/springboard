// countdown
// Write a function called countdown that accepts a number as 
// a parameter and every 1000 milliseconds decrements the value and 
// console.logs it. Once the value is 0 it should log “DONE!” and stop.

const countdown = (num) => {;
  const id  = setInterval(function () {
    num--
    if (num === 0) {
      clearInterval(id)
      console.log('DONE!')
    }
    else {
      console.log(num)
    }
  }, 1000);
};

// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, 
// add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.


const randomGame = () => {
  let counter = 0;
  const id = setInterval(function () {
    counter++;
    let randomNum = Math.random();
    console.log(randomNum);
    if (randomNum > 0.75) {
      clearInterval(id);
      console.log(counter);
    }
  }, 1000);
}