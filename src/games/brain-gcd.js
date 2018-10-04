import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const maxNumber = 100;

const getGCD = (firstNumber, secondNumber) => {
  if (firstNumber === 0 || secondNumber === 0) {
    return 0;
  }
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  if (firstNumber > secondNumber) {
    return getGCD(firstNumber - secondNumber, secondNumber);
  }
  return getGCD(firstNumber, secondNumber - firstNumber);
};

const gameIteration = () => {
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getGCD(firstNumber, secondNumber).toString();
  return cons(question, rightAnswer);
};

export default () => playGame('Find the greatest common divisor of given numbers.', gameIteration);
