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
PROF TIPS
Both arrays and strings have an "includes" method that return true/false.

It may be helpful to create arrays for incorrect letters AND correct letters.

It is possible to loop over the letters in a word the same as items in an array.

When the word on the screen has no more underscores and is equal to the randomly selected word, the user has won. You may create a separate variable for the underscore-obscured word, or simply select the textContent of the HTML element displaying the underscored word when comparing.

You'll likely be using a number of global variables to track the game state (current word, remaining guesses, incorrect letters, etc.). When the user runs out of guesses or correctly guesses the word, a new word should be chosen and some of the variables should be reset. It might be helpful to create a "newGame" function to reset some of the global variables that can be called when the game needs to reset for a new word.
*/

/*
-- PSEUDOCODE FOR WORD GUESS GAME --
#CHOOSE RANDOM WORD
# The chosen word only includes letters (no numbers, symbols, or whitespace).
# The chosen word should be randomly selected from a word bank.
word_bank = ["hello", "goodbye", "bananas", "apples", "billboard", "puppies"]
chosen_word = word_bank.sample
puts chosen_word

#SHOW WORD PROGRESS
# Each round the word is displayed (e.g. Word: __mm_t)
# Guessed letters are unmasked.
# Hidden letters are shown as underscores.

#SHOW REMAINING GUESSES
# Each round display the number of chances remaining.
# Display Chances remaining: CHANCES where CHANCES is an integer.

#PROMPT FOR GUESS
# Each round, the player is prompted for input.
# The player's input should appear on the same line (no newline after the prompt).

#GUESS LETTER OR WORD
# When a player enters a single character, it guesses a letter.
# When a player enters more than a single character, it guesses the word.

#CHECK GUESSED LETTERS
# If the guessed letter is within the word, those letters are unveiled.
# Display the number of times the letter is found when it is present.
# If the guessed letter is not within the word, subtract one from the chances remaining.
# The user is alerted if the guess is not found.
# If the guessed letter was already submitted, do not decrement the chances remaining.
# Display an error message if the letter was already guessed.

#CHECK GUESSED WORD
# If the guessed word matches the hidden word, the player wins the game.
# Output a congratulatory message if the guess was correct.
# If the guessed word does not match the hidden word, the player loses the game.
# Output an apologetic message if the guess was incorrect.

#GAME OVER WHEN NO MORE CHANCES
# The game ends when the number of chances remaining reaches zero.
# The user is alerted that they have run out of guesses
# Create newGame function to reset global variables to start a new game
*/