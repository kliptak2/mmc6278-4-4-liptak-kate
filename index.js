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
var remainingGuesses = 10
var remainingGuessesEl = document.getElementById("remaining-guesses")
var wins = 0
var winsEl = document.getElementById("wins")
var losses = 0
var lossesEl = document.getElementById("losses")
var wordToGuess = ""
var wordToGuessEl = document.getElementById("word-to-guess")
var wordToGuessIndivLettersArr = []
var wordDisp = ""
var wordDispArr = []

function generateWord(){
var randomWord = words[Math.floor(Math.random() * words.length)]     // select a word at random from words array 
wordToGuess = randomWord                                             // save original word
wordToGuessIndivLettersArr = randomWord.split("")                    // break randomWord into indiv letters. Having split value set to empty ("") splits the word after each character. (Alt: use .split("-") to split a phone # after every dash.)
var underscores = randomWord.replace(/[a-z]/g, '_');                 // replace letters with underscores
wordDisp = underscores
wordDispArr = underscores.split("")                                  // makes each underscore an indiv element
displayToScreen()                                                    // display underscores on screen. Run displayToScreen function
}

function displayToScreen(){                                          // puts everything to be displayed in one place
  wordToGuessEl.innerHTML = wordDisp
  previousWordEl.innerHTML = previousWord
  incorrectLettersEl.innerHTML = incorrectLettersArr
  remainingGuessesEl.innerHTML = remainingGuesses
  winsEl.innerHTML = wins
  lossesEl.innerHTML = losses
}

document.onkeyup = function(event){                                            // filter keypresses. function(event) = example of an anonymous function
  var key = event.key.toLowerCase()                                            // getting key and making it lowercase (to fix uppercase entries)
  if (/^[a-z]$/i.test(key) == false || incorrectLettersArr.includes(key)){     // check if key is a letter. If key is not a letter or if key is in incorrectLettersArr, stop function (aka return)
    return
  }
  
  if(wordToGuess.includes(key)){                                    // compare key to the word
    for (var i = 0; i < wordToGuessIndivLettersArr.length; i++)     // check how many times letter is in the word. For loops have 3 steps: 1) set starting point (array starts at 0), 2) set stopping point (length start at 1), and 3) define what action should happen until stopping point is reached. Since array starts at 0 and length starts at 1, can't make i <= because it would loop one too many times.
    {
      if (wordToGuessIndivLettersArr[i] == key){                    // for every item in array, does it = key?
        wordDispArr[i] = key                                        // wordDispArr at position i becomes key (i = the index of the letter, not the letter itself (aka the address))
      }
    }
    wordDisp = wordDispArr.join("")                                 // removes commas from the array (ex. _,_,_,)

  } else {                                                          // handle incorrect guess
    remainingGuesses--                                              // remove 1 remainingGuess
    incorrectLettersArr.push(key)                                   // add key to incorrectLettersArr
  }
  score()                                                           // call score function
  displayToScreen()                                                 // call displayToScreen function
}

function score()
{
  var gameOver = false
  if (remainingGuesses == 0)
  {
    losses++                          // increase losses by 1
    gameOver = true
  }
  if (!wordDispArr.includes("_"))     // if wordDispArr doesn't have any underscores, then we've found every letter. = win
  {
    wins++
    gameOver = true
  }
  if (gameOver == true)
  {
    newGame()                        // call newGame function
  }
}

function newGame(){
  previousWord = wordToGuess        // put wordToGuess in previous
  incorrectLettersArr = []          // empty out incorrectLettersArr
  remainingGuesses = 10             // reset remainingGuesses to 10
  generateWord()                    // generate new word. Runs generateWord function
}

document.onload = generateWord()    // on document load, run generateWord function
