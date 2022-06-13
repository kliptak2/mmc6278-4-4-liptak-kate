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
/*
Possible Global Variables
var randomWord
var wordToGuess
var remainingGuesses

var currentWord
var incorrectLetters
var previousWordEl
var incorrectLettersEl
var remainingGuessesEl
var correct = 0
var incorrect = 0
*/

// list global variables
var wordToGuess = document.getElementById("word-to-guess")
var wordDisp = document.getElementById('words')
var remainingGuesses = document.getElementById("remaining-guesses")

// select a word at random from words array 
var randomWord = words[Math.floor(Math.random() * words.length)]

// place randomly generated word into the #word-to-guess element
wordToGuess.textContent = randomWord

/*
// display letters as underscores FAIL
wordDisp.textContent = wordToGuess.replace(/[a-z]/g, '_');

// display 10 remaining guesses in the #remaining-guesses element FAIL
var counter = 0;
while (counter < 10)
{
  counter++;
  if (userInput == )
}
remainingGuesses.textContent = 
  

/*
// filter keypresses
document.onkeyup = function(userEvent)
{
  var key = userEvent.key.toLowerCase()
  if (words.indexOf(key) == -1) return

}

// compare user input to letters in randomWord

// If the letter is included, replace the underscores displayed in the #word-to-guess element) with the instances of that letter

// If the letter is not included, the #word-to-guess element should remain unchanged, but the incorrectly-guessed letter should be added to the #incorrect-letters element and the #remaining-guesses element should reflect one fewer remaining guess.

// If the user presses a non-letter key or the 'k' key repeatedly, there should be NO changes to the game state

// If user wins round, the game should increase win++ in the #wins element. The game should immediately proceed to the next randomly-chosen word and reset all of the other elements: incorrect letters should be blank, remaining guesses should show '10', and the #previous-word element should read the word from the previous round.

// If user loses round, the game should proceed to the next round and show an increase in losses++ 

/*
TIPS
Both arrays and strings have an "includes" method that return true/false.

It may be helpful to create arrays for incorrect letters AND correct letters.

It is possible to loop over the letters in a word the same as items in an array.

When the word on the screen has no more underscores and is equal to the randomly selected word, the user has won. You may create a separate variable for the underscore-obscured word, or simply select the textContent of the HTML element displaying the underscored word when comparing.

You'll likely be using a number of global variables to track the game state (current word, remaining guesses, incorrect letters, etc.). When the user runs out of guesses or correctly guesses the word, a new word should be chosen and some of the variables should be reset. It might be helpful to create a "newGame" function to reset some of the global variables that can be called when the game needs to reset for a new word.
*/