import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const maxNumber = 100;

const getGCD = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getGCD(secondNumber, firstNumber % secondNumber);
};

const gameIteration = () => {
  const firstNumber = getRandomNumber(0, maxNumber);
  const secondNumber = getRandomNumber(0, maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getGCD(firstNumber, secondNumber).toString();
  return cons(question, rightAnswer);
};

export default () => playGame('Find the greatest common divisor of given numbers.', gameIteration);
