#!/usr/bin/env node

import { askUser, getRandomNum, showToUser } from '..';

const playGame = (userName) => {
  function iter(currentLap) {
    if (currentLap === 3) {
      return `Congratulations, ${userName}!`;
    }
    const number = getRandomNum(20);
    showToUser(number);
    const isEvenNumber = (number % 2 === 0) ? 'yes' : 'no';
    const answer = askUser('Your answer: ');
    if (isEvenNumber === answer) {
      console.log('Correct!');
      return iter(currentLap + 1);
    }
    const correctAnswer = (answer === 'yes' ? 'no' : 'yes');
    return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  }
  return iter(0);
};

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"\n');

const name = askUser('May I have your name? ');
console.log('\n');
console.log(playGame(name));
