const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
const clickedCard = [];
let counter = 0;
let noClicking = false;
// TODO: Implement this function!
function handleCardClick(event) {
  if (noClicking) return;
  const currentCard = event.target;
  currentCard.style.backgroundColor = currentCard.classList.value;
  counter++;
  clickedCard.push(currentCard)
  console.log(counter)
  // validates the card
  if (counter === 2) {
    validateCard(currentCard)
    noClicking = true;
  }
}

const validateCard = (currentCard) => {
  if ( currentCard.classList.value !== clickedCard[0].classList.value) {
    setTimeout(function() {
      clickedCard.forEach(element => {
        element.style.backgroundColor = 'white';
      })
      clickedCard.length = 0;
      counter = 0;
      noClicking = false;
    },1000);
    
  }
  else {
    counter = 0;
    clickedCard.length = 0;
    noClicking = false;
  }
};


// when the DOM loads
createDivsForColors(shuffledColors);
