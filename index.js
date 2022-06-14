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
var previousWord =     // where do I pull this from?
var previousWordEl = document.getElementById("previous-word")
var incorrectLetters = [

]
var incorrectLettersEl = document.getElementById("incorrect-letters")
var correctLetters = [

]
var remainingGuesses = 10     // is this right?
var remainingGuessesEl = document.getElementById("remaining-guesses")
var wins = 0
var losses = 0
var winsEl = document.getElementById(wins)
var lossesEl = document.getElementById(losses)
var wordToGuess = 
var wordToGuessEl = document.getElementById("word-to-guess")
var wordDisp = 
var wordDispEl = document.getElementById('words')

// select a word at random from words array 
var randomWord = words[Math.floor(Math.random() * words.length)]

// place randomly generated word into the #word-to-guess element
wordToGuessEl.textContent = randomWord

// display letters as underscores
wordDispEl.textContent = wordToGuessEl.replace(/[a-z]/g, '_');    //Why does this fail?

// filter keypresses
document.onkeyup = function(userEvent)
{
  var key = userEvent.key.toLowerCase()     // filters out bad user entries
  if (words.indexOf(key) == -1) return     // if key is not in words array, return will stop rest of function from running
  if (key === randomWord)     // is this right? If I need a for loop to loop over the letters in randomWord, where do I put it?
  {
    // change underscore to display letter
    wordDispEl.textContent = wordToGuessEl.replace(/_/g, key);     // Why is this wrong?
    // add letter to correctLetters array     //how do I do this?

  }
  else
  {
    // add letter to correctLetters array     //how do I do this?
    //add add incorrectLetter to #incorrect-letters element
    incorrectLettersEl.textContent = incorrectLetters

    //decrease remainingGuesses by 1
    remainingGuesses --

  }
  
}

// How many functions do I need? Is this the right approach? One for userEvent, one for score, and one for ressetting the game?
function score()
{
  if (remainingGuesses = 0 || /*?*/ */)   // how do I capture if the word has been solved?
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


/*
PROF TIPS
#Both arrays and strings have an "includes" method that return true/false.

#It may be helpful to create arrays for incorrect letters AND correct letters.

#It is possible to loop over the letters in a word the same as items in an array.

#When the word on the screen has no more underscores and is equal to the randomly selected word, the user has won. You may create a separate variable for the underscore-obscured word, or simply select the textContent of the HTML element displaying the underscored word when comparing.

#You'll likely be using a number of global variables to track the game state (current word, remaining guesses, incorrect letters, etc.). When the user runs out of guesses or correctly guesses the word, a new word should be chosen and some of the variables should be reset. It might be helpful to create a "newGame" function to reset some of the global variables that can be called when the game needs to reset for a new word.
*/