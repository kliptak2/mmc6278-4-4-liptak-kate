var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

// list global variables
var previousWord = ""
var previousWordEl = document.getElementById("previous-word")
var incorrectLettersArr = []
var incorrectLettersEl = document.getElementById("incorrect-letters")
var remainingGuesses = 10     // is this right?
var remainingGuessesEl = document.getElementById("remaining-guesses")
var wins = 0
var losses = 0
var winsEl = document.getElementById("wins")
var lossesEl = document.getElementById("losses")
var wordToGuess = ""
var wordToGuessEl = document.getElementById("word-to-guess")
var wordToGuessIndivLetters = []
var wordDisp = ""

function generateWord(){
  // select a word at random from words array 
var randomWord = words[Math.floor(Math.random() * words.length)]
// save original word
wordToGuess = randomWord
// break randomWord into indiv letters
wordToGuessIndivLetters = randomWord.split("")     // .split("") breaks the word into every indiv character 
// replace letters with underscores
var underscores = randomWord.replace(/[a-z]/g, '_');
wordDisp = underscores
// display on screen
displayToScreen()
}
function displayToScreen(){
  wordToGuessEl.innerHTML = wordDisp
  previousWordEl.innerHTML = previousWord
  incorrectLettersEl.innerHTML = incorrectLettersArr
  remainingGuessesEl.innerHTML = remainingGuesses
  winsEl.innerHTML = wins
  lossesEl.innerHTML = losses
}


// // place randomly generated word into the #word-to-guess element
// wordToGuessEl.textContent = randomWord

// // display letters as underscores
//     //Why does this fail?
// console.log(randomWord,underscores)


// filter keypresses
document.onkeyup = function(event)
{
  var key = event.key.toLowerCase()     // getting key and making it lowercase (to fix uppercase entries)
  // check if what they typed is a letter
  if (/^[a-z]$/i.test(key) == false || incorrectLettersArr.includes(key)){     // if key is not a letter or if key is in incorrectLetters, stop function
    return
  }
  // compare it to the word
  if(wordToGuess.includes(key)){

  } else {     // handle incorrect guess
    // remove 1 remainingGuess & add key to incorrectLettersArr
    remainingGuesses--
    incorrectLettersArr.push(key)
  }

  
}

// How many functions do I need? Is this the right approach? One for userEvent, one for score, and one for ressetting the game?
function score()
{
  if (remainingGuesses = 0)   // how do I capture if the word has been solved?
  {
    // increase losses by 1
    losses++
    lossesEl.textContent = losses
  }
  else
  {
    // increase wins by 1
    wins++
    winsEl.textContent = wins
  }

}

function newGame()  // What should I use to trigger this? If wins or losses increases?
{
  //generate new word
  //reset remainingGuesses to 10
  // show previous word
}

document.onload = generateWord()
/*
PROF TIPS
#Both arrays and strings have an "includes" method that return true/false.

#It may be helpful to create arrays for incorrect letters AND correct letters.

#It is possible to loop over the letters in a word the same as items in an array.

#When the word on the screen has no more underscores and is equal to the randomly selected word, the user has won. You may create a separate variable for the underscore-obscured word, or simply select the textContent of the HTML element displaying the underscored word when comparing.

#You'll likely be using a number of global variables to track the game state (current word, remaining guesses, incorrect letters, etc.). When the user runs out of guesses or correctly guesses the word, a new word should be chosen and some of the variables should be reset. It might be helpful to create a "newGame" function to reset some of the global variables that can be called when the game needs to reset for a new word.
*/