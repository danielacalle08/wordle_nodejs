import words from './wordlist.js';

function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function checkWord(input, correctWord) {
    let result = Array(5).fill('_');

    for (let i = 0; i < input.length; i++) {
        if (input[i] === correctWord[i]) {
            result[i] = '✔';
        } else if (correctWord.includes(input[i])) {
            result[i] = '⚠';
        }
    }
    return result.join(' ');
}

export { randomWord, checkWord };