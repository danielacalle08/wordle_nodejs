import readline from 'readline';
import { randomWord, checkWord } from './game.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const word = randomWord();
let attempts = 0;

console.log('Welcome to the word guessing game!');
console.log('Try to guess the word by typing it in and pressing enter.');

function ask() {
    rl.question("Enter a word: ", (input) => {
        attempts++;
        if (input.length !== 5) {
            console.log("You have to enter a word with 5 characters.");
            ask();
            return;
        }
    
        const result = checkWord(input, word);
        console.log(result);

        if (input === word) {
            console.log(`Congratulations! You've guessed the word in ${attempts} attempts.`);
            rl.close();
        } else if (attempts < 6) {
            ask();
        } else {
            console.log(`You've run out of attempts! The word was: ${word}`);
            rl.close();
        }
    });
}

ask();