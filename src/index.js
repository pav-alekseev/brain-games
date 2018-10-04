import readlineSync from 'readline-sync';
import Addition from './expressions/addition';
import Substraction from './expressions/substraction';
import Multiplication from './expressions/multiplication';

const numberOfLaps = 3;
const expressionTypes = [Addition, Substraction, Multiplication];

export const maxRandomNumber = 20;

export const showGameGreeting = () => console.log('Welcome to the Brain Games!');

export const showUserGreeting = userName => console.log(`Hello, ${userName}!`);

export const showQuestion = question => console.log(`Question: ${question}`);

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const getRandomNumber = maxNumber => Math.floor(Math.random() * Math.floor(maxNumber));

export const getRandomExpression = () => {
  const firstNumber = getRandomNumber(maxRandomNumber);
  const secondNumber = getRandomNumber(maxRandomNumber);
  const Expression = expressionTypes[getRandomNumber(expressionTypes.length)];
  return new Expression(firstNumber, secondNumber);
};

export const isRightUserAnswer = (rightAnswer, userAnswer) => {
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

export const isEven = number => number % 2 === 0;

export const gameLoop = (currentLap, gameIteration) => {
  if (currentLap === numberOfLaps) {
    return true;
  }
  return gameIteration() ? gameLoop(currentLap + 1, gameIteration) : false;
};
