import { cons } from 'hexlet-pairs';
import playGame from '..';
import getRandomNumber from '../utils';

const maxNumber = 20;

const expressions = [
  {
    calculate: (firstNumber, secondNumber) => firstNumber + secondNumber,
    toString: (firstNumber, secondNumber) => `${firstNumber} + ${secondNumber}`,
  },
  {
    calculate: (firstNumber, secondNumber) => firstNumber - secondNumber,
    toString: (firstNumber, secondNumber) => `${firstNumber} - ${secondNumber}`,
  },
  {
    calculate: (firstNumber, secondNumber) => firstNumber * secondNumber,
    toString: (firstNumber, secondNumber) => `${firstNumber} * ${secondNumber}`,
  },
];

export const getRandomExpression = () => expressions[getRandomNumber(expressions.length)];

const gameIteration = () => {
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  const question = getRandomExpression();
  const rightAnswer = question.calculate(firstNumber, secondNumber).toString();
  return cons(question.toString(firstNumber, secondNumber), rightAnswer);
};

export default () => playGame('What is result of the expression?', gameIteration);
